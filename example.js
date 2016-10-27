var arrayCount = require('./arrayCount');

console.log(arrayCount(null)); // "invalid arguments"
console.log(arrayCount(undefined)); // "invalid arguments"
console.log(arrayCount("")); // "invalid arguments"

console.log(arrayCount([])); // 0
console.log(arrayCount([1,2,3])); // 6
console.log(arrayCount([1,2,"3"])); // 3
console.log(arrayCount([1,2,"3",4])); // 7
