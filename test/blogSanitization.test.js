const { sanitizeBlogPost } = require(`${__dirname}/../services/blogServices.js`);
const assert = require('assert'); 

it('html is appropriately sanitized', () => {
  const unsanitizedBlog = {post: '<script></script><h2>hello</h2><unknown>'};
  const sanitizedBlog = sanitizeBlogPost(unsanitizedBlog);
  
  assert.strictEqual(sanitizedBlog.post, '<h2>hello</h2>');
});

