const _ = require("underscore");

function sum(a, b) {
  return a + b;
}

// let result = sum(2, 3)
// console.log(result)

exports.sum = sum;

function add(numbers) {
  if (_.isArray(numbers)) {
    return numbers.reduce((a, b) => a + b);
  } else {
    return numbers
      .split(",")
      .map((x) => parseInt(x))
      .reduce((a, b) => a + b);
  }
}
exports.add = add;

function divideByZero(number) {
  const result = number / 0;
  return result;
}
exports.divideByZero = divideByZero;
