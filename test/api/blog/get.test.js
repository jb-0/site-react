const expect = require('chai').expect;
const request = require('supertest');
const assert = require('assert');

const app = require('../../../app.js');

describe('GET /api/blog', function () {
  this.timeout(10000)

  it('OK, returning all blog posts', async () => {
    const res = await request(app).get('/api/blog');
    expect(res.status).to.equal(200);
  });
});
