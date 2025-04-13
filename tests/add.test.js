const { test, describe, it } = require("node:test");
// Import the necessary modules and dependencies
const assert = require("assert");
const { add, divideByZero } = require("..");

test("synchronous passing test", (t) => {
  let result = add([1, 2]);
  // This test passes because it does not throw an exception.
  assert.strictEqual(result, 3);
});

test("synchronous failing test", (t) => {
  let result = add("1,2");
  // This test fails because it throws an exception.
  assert.strictEqual(result, 3);
});

// Describe a test suite using Mocha's "describe" function
describe("Math operations", () => {
  // Define a test case using Mocha's "it" function
  it("should add two numbers correctly", () => {
    const result = 1 + 2;
    assert.strictEqual(result, 3); // Assert the expected result
  });
  it("should multiply two numbers correctly", () => {
    const result = 3 * 4;
    assert.strictEqual(result, 12);
  });
  // it('should handle division by zero', () => {
  //   let result = divideByZero(10)
  //   assert.throws(result, Error); // Assert that an error is thrown
  // });
});
