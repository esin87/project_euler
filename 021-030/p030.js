// Digit fifth powers
// Problem 30
// Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

// 1634 = 1^4 + 6^4 + 3^4 + 4^4
// 8208 = 8^4 + 2^4 + 0^4 + 8^4
// 9474 = 9^4 + 4^4 + 7^4 + 4^4
// As 1 = 1^4 is not a sum it is not included.

// The sum of these numbers is 1634 + 8208 + 9474 = 19316.

// Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.
const getDigitNthPowerNums = (n) => {
	let result = 0;
	for (let i = 2; i <= 355000; i++) {
		const sum = i
			.toString()
			.split('')
			.map((x) => Math.pow(x, n))
			.reduce((sum, curVal) => sum + curVal);
		if (sum === i) result += i;
	}

	return result;
};

console.log(getDigitNthPowerNums(4)); //19316
console.log(getDigitNthPowerNums(5)); //443839
