// Lexicographic permutations
// Problem 24
// A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

// 012   021   102   120   201   210

// What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

const getLexicographicPermutations = (arr) => {
	// initialize
	const results = [];

	// recursive helper function to get permutations
	function rPermutations(stem, remainder) {
		// exit case - if the stem length equals the number of digits in the input array, push it into results and return out of function
		if (stem.length === arr.length) {
			results.push(stem);
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

	// return results array sorted lexicographically
	// calling sort without a compare callback function is sufficient here since we are comparing numerical strings
	return results.sort();
};

// What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
// call function and grab element at index 999999 (millionth element = 999999 + 1, since arrays are indexed from zero)
console.log(
	getLexicographicPermutations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])[999999]
);
//getting   2783915460
//should be 2783915460
