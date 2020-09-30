const { User } = require(`${__dirname}/../models/userModel.js`);
const userRoutes = require('express').Router();

Router.post('/register', (req, res) => {
  const { email, password, passwordCheck, displayName } = req.body;
})

module.exports = userRoutes;
