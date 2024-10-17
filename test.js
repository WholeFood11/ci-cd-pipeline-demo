// test.js
const add = require('./index');
const assert = require('assert');

try {
  assert.strictEqual(add(2, 3), 5);
  console.log('All tests passed!');
} catch (error) {
  console.error('Test failed:', error.message);
  process.exit(1);
}
