require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 4000;
const { connection } = mongoose;
const { User } = require(`${__dirname}/models/userModel.js`);
const { Blog } = require(`${__dirname}/models/blogModel.js`);

/* ***************************************
DB CONNECTION
*************************************** */
mongoose.connect(process.env.DEV_DB_PATH, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connection.once('open', () => {
  console.log('MongoDB connection established');
});

/* ***************************************
APP CONFIG
*************************************** */
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/blog', require(`${__dirname}/routes/blogRoutes.js`));
app.use('/users', require(`${__dirname}/routes/userRoutes.js`));

/* ***************************************
FRONTEND LINKAGE
*************************************** */
app.use(express.static(`${__dirname}/../frontend/build`));
app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/../frontend/build`);
});

console.log(`${__dirname}/../frontend/build`);

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
