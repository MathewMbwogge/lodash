console.log("Practical Task 15");
console.log();

const lodash = require('lodash'); // To import lodash.
const _ = require('lodash');

const numbers = [1, 2, 10, 100, 10, 2, 5, 6, 10, 1000, 7, 2, 100, 1, 5, 7, 10];

console.log("The original array is: " + numbers);

const myarray = lodash(_.uniq([1, 2, 10, 100, 10, 2, 5, 6, 10, 1000, 7, 2, 100, 1, 5, 7, 10]));

console.log();
console.log("The cleaned array is: " + myarray);
console.log();
console.log("End of Code");