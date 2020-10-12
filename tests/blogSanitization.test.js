const { sanitizeBlogPost } = require(`${__dirname}/../services/blogServices.js`);


test('html is appropriately sanitized', () => {
  const unsanitizedBlog = {post: '<script></script><h2>hello</h2><unknown>'};
  const sanitizedBlog = sanitizeBlogPost(unsanitizedBlog);
  
  expect(sanitizedBlog.post).toEqual('<h2>hello</h2>');
});

