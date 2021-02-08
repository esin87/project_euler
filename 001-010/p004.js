// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

const findLargestPalindrome = (n) => {
	// obtain highest factor based on digits of input (10^n - 1)
	let highestFactor = 10 ** n - 1;
	let palindrome = 0;

	// calculate products
	for (let i = highestFactor; i > 0; i--) {
		for (let j = highestFactor; j > 0; j--) {
			const product = i * j;
			if (product > palindrome && checkIfPalindrome(product)) {
				palindrome = product;
				break;
			} else if (palindrome > product) {
				break;
			}
		}
	}

	return palindrome;
};

const checkIfPalindrome = (num) => {
	if (num < 10) return 'Input must be at least two digits';
	return num.toString() === num.toString().split('').reverse().join('');
};

console.log(findLargestPalindrome(2));
console.log(findLargestPalindrome(3));
