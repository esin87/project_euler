// Coded triangle numbers
// Problem 42
// The nth term of the sequence of triangle numbers is given by, tn = ½n(n+1); so the first ten triangle numbers are:

// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

// By converting each letter in a word to a number corresponding to its alphabetical position and adding these values we form a word value. For example, the word value for SKY is 19 + 11 + 25 = 55 = t10. If the word value is a triangle number then we shall call the word a triangle word.

// Using words.txt (right click and 'Save Link/Target As...'), a 16K text file containing nearly two-thousand common English words, how many are triangle words?

const words = require('./p042words');

const isTriangleNumber = (wordValue) => {
	for (let n = 1; n <= wordValue; n++) {
		const t = 0.5 * n * (n + 1);
		if (t === wordValue) {
			return true;
		}
	}

	return false;
};

const getTriangleWordCount = (arr) => {
	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		// split the word into an array and reduce it to its character code sum
		const wordSum = arr[i].split('').reduce((acc, curVal) => {
			// increment the accumulator by the value of the ASCII code at character 0, minus 64 to get alphabetical position
			acc += curVal.charCodeAt(0) - 64;
			// return accumulator
			return acc;
			// initialize accumulator as zero
		}, 0);

		// increment count value if the sum is a triangle number
		if (isTriangleNumber(wordSum)) {
			count++;
		}
	}

	// return total sum of all the names
	return count;
};

console.log(getTriangleWordCount(words)); //162
