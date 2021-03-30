// Digit factorials
// Problem 34
// 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Find the sum of all numbers which are equal to the sum of the factorial of their digits.

// Note: As 1! = 1 and 2! = 2 are not sums they are not included.

// helper function to create a table of factorial references for digits 0-9
function factorialTable() {
	// for some reason 0! = 1, so preset the table with that value
	const table = { 0: 1 };
	let prod = 1;
	// loop through digits, adding key value pairs of digit and its corresponding factorial as we go
	for (let i = 1; i <= 9; i++) {
		prod *= i;
		table[i] = prod;
	}

	// return the reference table
	return table;
}

function getDigitFactorials() {
	// invoke the reference table helper function so that we don't have to calculate factorials every time, have O(1) lookup
	const factsTable = factorialTable();
	// store the sum of all the numbers that match
	let sum = 0;
	// loop through numbers starting with 10 (single-digit numbers don't have any non-trivial results that match our prompt)
	for (let i = 10; i < 2000000; i++) {
		// arrayify the number's digits
		const digitsArr = i
			.toString()
			.split('')
			.map((x) => parseInt(x));
		// add up the factorial products of each digit
		const factorialSum = digitsArr.reduce((sum, curVal) => {
			return sum + factsTable[curVal];
		}, 0);

		// if the number is equal to the sum of its factorial products, add it to our result sum
		if (i === factorialSum) {
			sum += i;
		}
	}

	return sum;
}
console.log(getDigitFactorials());
// 40730
