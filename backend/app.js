require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 4000;
const routes = express.Router();
const Schema = mongoose.Schema;

const Blog = new Schema({
  title: { type: String },
  author: { type: String },
  post: { type: String },
  created_date: { type: Date },
});

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
