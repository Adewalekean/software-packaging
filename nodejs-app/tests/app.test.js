const test = require('node:test');
const assert = require('node:assert/strict');
const app = require('../app');

test('Homepage returns HTTP 200', async () => {
  const server = app.listen(0);

  try {
    const port = server.address().port;
    const response = await fetch(`http://localhost:${port}/`);

    assert.equal(response.status, 200);
  } finally {
    server.close();
  }
});

test('Homepage displays the correct message', async () => {
  const server = app.listen(0);

  try {
    const port = server.address().port;
    const response = await fetch(`http://localhost:${port}/`);
    const body = await response.text();

    assert.equal(
      body,
      'Hello! My Node.js application is running.'
    );
  } finally {
    server.close();
  }
});