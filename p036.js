// Double-base palindromes
// Problem 36
// The decimal number, 585 = 1001001001 (binary), is palindromic in both bases.

// Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

// (Please note that the palindromic number, in either base, may not include leading zeros.)

// helper function to calculate number in binary
const getBaseTwoNum = (num) => {
	// Big Int is needed here to handle base 2 number digit lengths for larger num inputs
	return BigInt(num).toString(2);
};

// helper function to check if the reverse of a number equals itself (both stringified)
const checkIfPalindrome = (num) => {
	return num.toString() === num.toString().split('').reverse().join('');
};

const getDoubleBasePalindromes = (upperLimit) => {
	let sum = 0;
	// loop through base ten numbers up to upper limit
	for (let i = 1; i < upperLimit; i += 2) {
		// get number in base two
		const baseTwo = getBaseTwoNum(i);
		// check to see if both the number and its binary counterpart are palindromic
		if (checkIfPalindrome(i) && checkIfPalindrome(baseTwo)) {
			// if so, add the number in base ten to sum
			sum += i;
		}
	}

	return sum;
};

console.log(getDoubleBasePalindromes(1000000)); //872187
