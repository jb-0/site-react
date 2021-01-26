require('dotenv').config();

const express = require('express');
const enforce = require('express-sslify');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4000;

async function main() {
  /* ***************************************
  APP CONFIG
  *************************************** */
  if (process.env.PROD) app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use('/api/contact', require(`${__dirname}/routes/contactRoutes.js`));

  /* ***************************************
  FRONTEND LINKAGE
  *************************************** */
  app.use(express.static(`${__dirname}/frontend/build`));
  app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/frontend/build/index.html`);
  });

  app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`);
  }); 
}

main();

module.exports = app;