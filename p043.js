// Sub-string divisibility
// Problem 43
// The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

// Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:

// d2d3d4=406 is divisible by 2
// d3d4d5=063 is divisible by 3
// d4d5d6=635 is divisible by 5
// d5d6d7=357 is divisible by 7
// d6d7d8=572 is divisible by 11
// d7d8d9=728 is divisible by 13
// d8d9d10=289 is divisible by 17
// Find the sum of all 0 to 9 pandigital numbers with this property.

// helper function to check if the number's digits meet the unique divisibility requirements for this problem
const checkIfDivisible = (numStr) => {
	const divisibilityFactors = [2, 3, 5, 7, 11, 13, 17];
	let strIdx = 1;
	while (strIdx <= 7) {
		const digitSum = numStr[strIdx] + numStr[strIdx + 1] + numStr[strIdx + 2];
		if (parseInt(digitSum) % divisibilityFactors[strIdx - 1]) {
			return false;
		}
		strIdx++;
	}

	return true;
};

const getNumericPermutations = (arr) => {
	const results = [];

	// recursive helper function to get permutations
	function rPermutations(stem, remainder) {
		// exit case - if the first digit is not zero and stem length equals the number of digits in the input array, push it into results and return out of function
		if (stem.charAt(0) !== '0' && stem.length === arr.length) {
			results.push(parseInt(stem));
			return;
		}

		// action step
		// loop over the remainder
		for (let i = 0; i < remainder.length; i++) {
			// create a new remainder array by grabbing the remainder up to but not including i, skip i, and concatenate the array with the remaining elements
			const newRemainder = remainder.slice(0, i).concat(remainder.slice(i + 1));
			// recursively call rPermutations with the stem plus the remainder at element i, and the new remainder
			rPermutations(stem + remainder[i], newRemainder);
		}
	}

	// call recursive helper function with an empty string to build permutations using input array
	rPermutations('', arr);

	return results;
};

const getSubstringDivisiblePandigitals = () => {
	console.time('timer');
	let sum = 0;
	// create array of possible pandigital numbers
	const pandigitals = getNumericPermutations([
		'0',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
	]);

	// loop over pandigitals
	for (let i = 0; i < pandigitals.length; i++) {
		const numStr = pandigitals[i].toString();
		if (checkIfDivisible(numStr)) {
			sum += pandigitals[i];
		}
	}
	console.timeEnd('timer');
	return sum;
};

console.log(getSubstringDivisiblePandigitals());
//16695334890
//timer: 4382.829ms
