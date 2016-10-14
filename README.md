# count-values-inarray

A Node.js package that when provide integer array, finds count of all values.

## Usage

First, install the package using npm:

    npm install count-values-inarray --save

Then, require the package and use it like so:

    var arrayCount = require('./arrayCount');

	console.log(arrayCount(null)); // "invalid arguments"
	console.log(arrayCount(undefined)); // "invalid arguments"
	console.log(arrayCount("")); // "invalid arguments"

	console.log(arrayCount([])); // 0
	console.log(arrayCount([1,2,3])); // 6
	console.log(arrayCount([1,2,"3"])); // 3

## License

MIT