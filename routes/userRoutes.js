const { User } = require(`${__dirname}/../models/userModel.js`);
const userRoutes = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require(`${__dirname}/../middleware/auth.js`);

// Login route
userRoutes.post('/login', async (req, res) => {
  try {
    // A given user should supply an email and password
    const { email, password } = req.body;

    // Some basic validation is performed
    if (!email || !password) {
      return res.status(400).json({ msg: 'All fields must be complete' });
    }

    // Check to see if the user exists in the DB
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'No account with this email found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_TOKEN, { expiresIn: '5m' });
    res.json({
      token,
      user: {
        id: user.id,
        displayName: user.displayName,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route confirming whether or not user is logged in (has a valid token) as a boolean
userRoutes.post('/isTokenValid', async (req, res) => {
  try {
    const token = req.header('x-auth-token');

    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_TOKEN);

    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to get username for a logged in user
userRoutes.get('/', auth, async(req, res) => {
  const user = await User.findById(res.user, {_id:1, displayName:1, active:1});
  res.json(user);
});

module.exports = userRoutes;
