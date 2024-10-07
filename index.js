const _ = require('underscore');

function sum(a, b) {
    return a + b;
}

// let result = sum(2, 3)
// console.log(result)

exports.sum = sum;

function add(numbers) {
    return numbers
        .split(',')
        .map(x => parseInt(x))
        .reduce((a, b) => a + b)
}

exports.add = add;
