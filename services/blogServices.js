const sanitizeHtml = require('sanitize-html');

const permittedHtml = {
    allowedTags: ['b', 'i', 'em', 'strong', 'a', 'img', 'p', 'h2'],
    allowedAttributes: {
      a: ['href'],
      img: [ 'src' ]
    }
  };

const sanitizeBlogPost = (blogPost) => {
  const sanitizedBlogPost = blogPost;
  sanitizedBlogPost.post = sanitizeHtml(blogPost.post, permittedHtml)
  return sanitizedBlogPost
}

module.exports = { sanitizeBlogPost }