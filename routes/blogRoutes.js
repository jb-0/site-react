const { Blog } = require(`${__dirname}/../models/blogModel.js`);
const blogRoutes = require('express').Router();
const auth = require(`${__dirname}/../middleware/auth.js`);
const { sanitizeBlogPost } = require(`${__dirname}/../services/blogServices.js`);

// Route to return all blog posts
blogRoutes.get('/', (req, res) => {
  Blog.find((err, blogPosts) => {
    if (err) {
      console.log(err);
    } else {
      res.json(blogPosts);
    }
  }).sort({ created_date: 'desc' });
});

// Route to return a specific blog post
blogRoutes.get('/:id', (req, res) => {
  const { id } = req.params;
  Blog.findById(id, (err, blogPost) => { 
    if (err) {
      console.log(err);
      res.status(404).send('blog does not exist');
    } else {
      // Sanitize blog post to ensure only permitted HTML elements are sent over
      // blogs also sanitized on post, but this keeps ruleset current and prevents any opportunity
      // for disallowed HTML to be injected to the database and rendered   
      res.json(sanitizeBlogPost(blogPost));
    }
  });
});

// Route to create a new blog post
blogRoutes.post('/create', auth, (req, res) => {
  let blog = new Blog({
    title: req.body.title,
    post: req.body.post,
    author: req.body.author,
    created_date: req.body.created_date,
  });

  blog = sanitizeBlogPost(blog);
  
  blog.save((err) => {
    if (!err) {
      res.status(200).json({ blog: 'blog created', content: blog });
    } else {
      res.status(400).send('blog creation failed');
    }
  });
});

// Route to patch (edit) a blog post
blogRoutes.patch('/edit/:id', auth, (req, res) => {
  let blog = req.body
  console.log(blog);

  blog = sanitizeBlogPost(blog);

  Blog.updateOne(
    { _id: req.params.id },
    { $set: blog },
    { overwrite: true },
    (err) => {
      if (!err) {
        res.send('blog updated');
      } else {
        res.send(err);
      }
    }
  );
});

module.exports = blogRoutes;
