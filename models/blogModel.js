const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: { type: String },
  author: { type: String },
  post: { type: String },
  created_date: { type: Date },
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = { Blog };
