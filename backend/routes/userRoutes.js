const { User } = require(`${__dirname}/../models/userModel.js`);
const userRoutes = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require(`${__dirname}/../middleware/auth.js`);

userRoutes.post('/register', async (req, res) => {
  try {
    // A given user should supply an email, password (twice) and a display name
    // display name will be displayed on blog posts
    const { email, password, passwordCheck, displayName } = req.body;

    // Some basic validation is performed
    if (!email || !password || !passwordCheck || !displayName) {
      return res.status(400).json({ msg: 'All fields must be complete' });
    }
    if (password.length < 8) {
      return res
        .status(400)
        .json({ msg: 'Password must be at least 8 characters' });
    }
    if (password !== passwordCheck) {
      return res.status(400).json({ msg: 'Passwords must match' });
    }

    // Check to see if the user exists in the DB
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ msg: 'Existing account with this email found' });
    }

    // Hash password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // Create user model
    const newUser = new User({
      email,
      password: passwordHash,
      displayName,
      active: false, // Active set as false to ensure only manually activated accounts can login
    });

    // Save the new user
    newUser.save((err) => {
      if (!err) {
        res.status(200).json({ msg: 'User created, requires activation' });
      } else {
        res.status(400).send('User creation failed');
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

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

    const token = jwt.sign({ id: user.id }, process.env.JWT_TOKEN);
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

module.exports = userRoutes;
