const {test, describe, it} = require('node:test');
// Import the necessary modules and dependencies
const assert = require('assert');

test('synchronous passing test', (t) => {
  // This test passes because it does not throw an exception.
  assert.strictEqual(1, 1);
});

// test('synchronous failing test', (t) => {
//   // This test fails because it throws an exception.
//   assert.strictEqual(1, 2);
// });

// Describe a test suite using Mocha's "describe" function
describe('Math operations', () => {
  // Define a test case using Mocha's "it" function
  it('should add two numbers correctly', () => {
    const result = 1 + 2;
    assert.strictEqual(result, 3); // Assert the expected result
  });
  it('should multiply two numbers correctly', () => {
    const result = 3 * 4;
    assert.strictEqual(result, 12);
  });
  // it('should handle division by zero', () => {
  //   const divideByZero = () => {
  //     const result = 10 / 0;
  //   };
  //   assert.throws(divideByZero, Error); // Assert that an error is thrown
  // });
});