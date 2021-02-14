// LATTICE PATHS

// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

// How many such routes are there through a 20×20 grid?

// 2 ==> 6
// 20 ==> ?

// needed a lot of help for this one
// https://stackoverflow.com/questions/2200236/project-euler-15
// Binomial coefficient
// n!/r!(n-r)! r = the number of rows which is 20, and n is 2r which is 40.
// https://en.wikipedia.org/wiki/Binomial_coefficient
const getLatticePaths = (r) => {
	const n = 2 * r;
	return Math.floor(getFactorial(n) / (getFactorial(r) * getFactorial(n - r)));
};

const getFactorial = (num, prod = 1) => {
	if (num <= 1) return prod;
	prod *= num;
	num--;
	return getFactorial(num, prod);
};

console.log(getLatticePaths(2)); //6
console.log(getLatticePaths(3)); //20
console.log(getLatticePaths(4));
console.log(getLatticePaths(20)); // 137846528820
