// Maximum path sum I
// Show HTML problem content
// Problem 18
// By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

const triOne = [[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]];

// That is, 3 + 7 + 4 + 9 = 23.

// Find the maximum total from top to bottom of the triangle below:

const triTwo = [
	[75],
	[95, 64],
	[17, 47, 82],
	[18, 35, 87, 10],
	[20, 04, 82, 47, 65],
	[19, 01, 23, 75, 03, 34],
	[88, 02, 77, 73, 07, 63, 67],
	[99, 65, 04, 28, 06, 16, 70, 92],
	[41, 41, 26, 56, 83, 40, 80, 70, 33],
	[41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
	[53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
	[70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
	[91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
	[63, 66, 04, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
	[04, 62, 98, 27, 23, 09, 70, 98, 73, 93, 38, 53, 60, 04, 23],
];

// NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. However, Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)

// learned how to use dynamic programming for this problem from: https://www.mathblog.dk/project-euler-18/
// https://www.mathblog.dk/files/euler/Problem18.cs
const getMaxPathSum = (tri) => {
	const lines = tri.length;
	const largestValues = [];

	for (let i = 0; i < lines; i++) {
		// approaching problem from the bottom up as per Kristian Edlund's solution
		// populate largest values array with values from triangle's bottom row
		largestValues[i] = tri[lines - 1][i];
	}

	// largestValues is now the row of bottommost elements

	// start looping at second to last row
	for (let i = lines - 2; i >= 0; i--) {
		// loop over individual row elements
		for (let j = 0; j <= i; j++) {
			// store current value in triangle row
			const curVal = tri[i][j];
			// add a new value to largestValues with array that is the sum of the current value and the larger of the adjacent row values from largestValues
			largestValues[j] =
				curVal + Math.max(largestValues[j], largestValues[j + 1]);
		}
	}
	//the largest value is the first in the largestValues array
	return largestValues[0];
};

console.log(getMaxPathSum(triOne)); //23
console.log(getMaxPathSum(triTwo)); //1074
