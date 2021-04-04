// Champernowne's constant
// Problem 40
// An irrational decimal fraction is created by concatenating the positive integers:

// 0.123456789101112131415161718192021...

// It can be seen that the 12th digit of the fractional part is 1.

// If d,n represents the nth digit of the fractional part, find the value of the following expression.

// d,1 × d,10 × d,100 × d,1000 × d,10000 × d,100000 × d,1000000

// brute force
// create the decimal fraction in string form
const getIrrationalDecimalFraction = (upperLimit) => {
	let result = '';
	for (let i = 0; i <= upperLimit; i++) {
		result += i.toString();
	}

	return result;
};

const getProduct = (upperLimit) => {
	const decimal = getIrrationalDecimalFraction(upperLimit);
	let product = 1;

	// calculate the product
	for (let i = 1; i <= upperLimit; i *= 10) {
		product *= parseInt(decimal[i]);
	}

	return product;
};

console.log(getProduct(1000000)); //210
