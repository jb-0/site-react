const { User } = require(`${__dirname}/../models/userModel.js`);
const userRoutes = require('express').Router();
const bcrypt = require('bcrypt');

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
      res.status(400).json({ msg: 'Existing account with this email found' });
    }

    // Hash password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: passwordHash,
      displayName,
      active: false,
    });

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

module.exports = userRoutes;
