// FACTORIAL DIGIT SUM

// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits in the number 100!

const getFactorialDigitSum = (n) => {
	// recursive helper function to get factorial product
	function rFactorial(n, prod = BigInt(1)) {
		// exit condition
		if (n === 1) return prod;

		// action step: multiply product by value of n and decrement n
		prod *= BigInt(n);
		n--;

		// recursion
		return rFactorial(n, prod);
	}

	// store factorial product as an array of stringified single digits
	const factProd = rFactorial(n).toString().split('');

	// return sum of stringified numbers array
	return factProd.reduce((sum, curVal) => sum + parseInt(curVal), 0);
};

console.log(getFactorialDigitSum(10)); //27
console.log(getFactorialDigitSum(100)); //648
