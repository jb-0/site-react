/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable prefer-arrow-callback */
const request = require('supertest');
const assert = require('assert');

const { sanitizeBlogPost } = require('../services/blogServices.js');
const app = require('../app.js');
const { Blog } = require('../models/blogModel.js');

// *************************************
// BLOG ROUTE TESTS
// *************************************
describe('Blog routes', function () {
  let token = '';

  // Authenticate before creating blog posts and clear prior test data
  before(async function () {
    // Clear blogs collection
    Blog.deleteMany({}, (err) => {
      // If this fails for any reason then this should be flagged
      assert.strictEqual(err, null);
    });

    // Login
    const res = await request(app).post('/api/users/login').send({
      email: process.env.TEST_USER,
      password: process.env.TEST_USER_PASSWORD,
    });

    // Ensure this is successful, otherwise future tests will fail and effort may be wasted trying
    // to find the cause
    assert.strictEqual(res.status, 200);

    token = res.body.token;
  });

  describe('POST /api/create', function () {
    this.timeout(10000);

    it('create blog denied for unauthenticated user', async function () {
      const res = await request(app).post('/api/blog/create');
      assert.strictEqual(res.status, 401);
    });

    it('create blogs with authenticated user', async function () {
      for (let i = 0; i < 10; i++) {
        // eslint-disable-next-line no-await-in-loop
        const res = await request(app)
          .post('/api/blog/create')
          .set({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-auth-token': token,
          })
          .send({
            title: `${i} Dummy Blog`,
            author: 'Ghost',
            post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            created_date: new Date(),
          });
        assert.strictEqual(res.status, 200);
      }
    });
  });

  describe('GET /api/blog', function () {
    this.timeout(10000);

    it('all blog posts returned', async function () {
      const res = await request(app).get('/api/blog');
      assert.strictEqual(res.status, 200);
    });
  });
});

// *************************************
// BLOG SERVICES TESTS
// *************************************
describe('Blog services', function () {
  it('html is appropriately sanitized', () => {
    const unsanitizedBlog = {
      post: '<script></script><h2>hello</h2><unknown>',
    };
    const sanitizedBlog = sanitizeBlogPost(unsanitizedBlog);

    assert.strictEqual(sanitizedBlog.post, '<h2>hello</h2>');
  });
});
