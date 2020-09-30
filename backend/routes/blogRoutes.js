const { Blog } = require(`${__dirname}/../models/blogModel.js`);
const blogRoutes = require('express').Router();

// Route to return all blog posts
blogRoutes.route('/').get((req, res) => {
  Blog.find((err, blogPosts) => {
    if (err) {
      console.log(err);
    } else {
      res.json(blogPosts);
    }
  });
});

// Route to return a specific blog post
blogRoutes.route('/:id').get((req, res) => {
  const { id } = req.params;
  Blog.findById(id, (err, blogPost) => {
    if (err) {
      console.log(err);
    } else {
      res.json(blogPost);
    }
  });
});

// Route to create a new blog post
blogRoutes.route('/create').post((req, res) => {
  const blog = new Blog({
    title: req.body.title,
    post: req.body.post,
    author: req.body.author,
    created_date: req.body.created_date,
  });

  blog.save((err) => {
    if (!err) {
      res.status(200).json({ blog: 'blog created', content: blog });
    } else {
      res.status(400).send('blog creation failed');
    }
  });
});

// Route to patch (edit) a blog post
blogRoutes.route('/edit/:id').patch((req, res) => {
  Blog.updateOne(
    { _id: req.params.id },
    { $set: req.body },
    { overwrite: true },
    (err) => {
      if (!err) {
        res.send('blog updated');
      } else {
        res.send(err);
      }
    },
  );
});

module.exports = { blogRoutes };