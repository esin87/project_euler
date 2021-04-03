// Pandigital products
// Problem 32
// We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

// The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

// Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

// HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.

// isPandigital helper function checks to see if a given numerical string is 1-9 pandigital
const isPandigital = (num) => {
	// reference numerical array
	const digits = '123456789';
	// split and sort the input numerical string
	const sortedNumStr = num.split('').sort().join('');

	return digits === sortedNumStr;
};

const getPanDigitalProducts = () => {
	// hold products in this array to check for repeats
	const results = [];
	// a four-digit number is the largest possible factor for a nine-digit product
	const upperLimit = 9876;

	// outer loop for multiplicand
	for (let i = 1; i <= upperLimit; i++) {
		const multiplicand = i;
		for (let j = 1; j <= upperLimit; j++) {
			// 	inner loop for multiplier
			const multiplier = j;
			// a pandigital product can't be obtained with two equal factors
			if (multiplicand === multiplier) continue;
			// obtain product of two numbers
			const product = multiplicand * multiplier;
			// stringify the three numbers (two factors and product)
			const numString = multiplicand
				.toString()
				.concat(multiplier.toString(), product.toString());
			// if the length of the string is greater than 9, break out of the loop, as the result cannot be 1-9 pandigital
			if (numString.length > 9) break;
			// if the length of the string is not equal to 9, continue through inner loop
			if (numString.length !== 9) continue;
			// check if the product is not yet in the results array, then check to see if it's pandigital
			if (!results.includes(product) && isPandigital(numString)) {
				// if so add it to the results array
				results.push(product);
			}
		}
	}
	// return the sum of the results array
	return results.reduce((a, b) => a + b);
};

console.log(getPanDigitalProducts());
// 45228
