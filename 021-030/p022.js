// Names scores
// Show HTML problem content
// Problem 22
// Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

// For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

// What is the total of all the name scores in the file?

// import names array
const names = require('./p022names');

// call sort on array (sort characters in ascending character order)
names.sort();

const getNamesScore = (arr) => {
	// initialize sum
	let sum = 0;

	// loop over names array
	for (let i = 0; i < arr.length; i++) {
		// save index of list as i plus 1
		const index = i + 1;
		// split the name into an array and reduce it
		const nameSum = arr[i].split('').reduce((acc, curVal) => {
			// increment the accumulator by the value of the ASCII code at character 0, minus 64 to get alphabetical position
			acc += curVal.charCodeAt(0) - 64;
			// return accumulator
			return acc;
			// initialize accumulator as zero
		}, 0);

		// increment sum by value of alphabetical sum of name times its indexed position in sorted list
		sum += nameSum * index;
	}

	// return total sum of all the names
	return sum;
};

console.log(getNamesScore(names));
//871198282
