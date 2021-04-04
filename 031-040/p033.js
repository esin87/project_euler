// Digit cancelling fractions
// Problem 33
// The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

// We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

// There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

// If the product of these four fractions is given in its lowest common terms, find the value of the denominator.

// helper function to accept a number and return an array of its digits in Number data type
const splitNumDigits = (n) =>
	n
		.toString()
		.split('')
		.map((x) => parseInt(x));

// helper function to return the fractional product of an array of fractional subarrays
const getFractionProduct = (arr) => {
	const num = arr.reduce((product, curVal) => product * curVal[0], 1);
	const denom = arr.reduce((product, curVal) => product * curVal[1], 1);

	return [num, denom];
};

// helper function to simplify a fraction less than one and return it in simplified terms
const simplifyFraction = (fractionArr) => {
	let x = fractionArr[0];
	let y = fractionArr[1];

	while (x % y !== 0) {
		const temp = x;
		x = y;
		y = temp % x;
	}
	return [fractionArr[0] / y, fractionArr[1] / y];
};

const getDigitCancellingFraction = () => {
	// store fractions in results array
	const results = [];
	// loop over two-digit numbers starting at 10 for potential numerators
	for (let i = 10; i < 98; i++) {
		// fractions are less than one, so start denominator at one more than numerator
		for (let j = i + 1; j < 99; j++) {
			// if either numerator or denominator has 0, it can't be part non-trivial example
			if (i % 10 === 0 || j % 10 === 0) continue;
			// grab digits of numerator and denominator
			const iArr = splitNumDigits(i);
			const jArr = splitNumDigits(j);
			// calculate fraction
			const fraction = i / j;
			let reduced;
			// if first numerator digit and second denominator match
			if (iArr[0] === jArr[1]) {
				reduced = iArr[1] / jArr[0];
				// check if reduced fraction's decimal equivalent is equal to original fraction's decimal equivalent
				if (fraction === reduced) {
					results.push([i, j]);
				}
				// else if second numerator digit and first denominator digit match, do the same
			} else if (iArr[1] === jArr[0]) {
				reduced = iArr[0] / jArr[1];
				if (fraction === reduced) {
					results.push([i, j]);
				}
			}
		}
	}
	// calculate the product of the numerators and denominators of the results
	const fractionalProduct = getFractionProduct(results);
	// simplify the fraction by dividing out the greatest common denominator
	const simplifiedFraction = simplifyFraction(fractionalProduct);

	// return the simplified fraction's denominator
	return simplifiedFraction[1];
};

console.log(getDigitCancellingFraction()); //100
