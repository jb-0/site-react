const contactRoutes = require('express').Router();
const Email = require('email-templates');
const frontendCheck = require('../middleware/frontendCheck.js');

contactRoutes.post('/', frontendCheck, (req, res) => {
  const email = new Email({
    message: {
      from: req.body.email,
      subject: `SITE: ${req.body.name}`,
      text: req.body.message,
    },
    send: true,
    preview: false,
    transport: {
      host: 'smtp.mailtrap.io',
      port: 2525,
      ssl: false,
      tls: true,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    },
  });

  email
    .send({
      template: 'welcome',
      message: {
        to: process.env.MAILTRAP_TARGET,
      },
    })
    .then(res.send('mail sent'))
    .catch(console.error);
});

module.exports = contactRoutes;
