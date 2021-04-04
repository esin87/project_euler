// Integer right triangles
// Problem 39
// If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

// {20,48,52}, {24,45,51}, {30,40,50}

// For which value of p ≤ 1000, is the number of solutions maximised?

// helper function to find number of possible solutions for a given sum (perimeter)
const findPythagoreanTriples = (sum) => {
	let a, b, c;
	let solutions = 0;
	// loop through possibilities for a (a cannot be greater than a third of the sum)
	for (a = 1; a < sum / 3; a++) {
		// loop through possibilities for b, starting at a+ 1 (b cannot be greater than half of the sum)
		for (b = a + 1; b < sum / 2; b++) {
			c = sum - a - b;
			if (a ** 2 + b ** 2 === c ** 2) {
				// console.log(
				// 	`The value of a is ${a}, the value of b is ${b}, and the value of c is ${c}. The product is ${
				// 		a * b * c
				// 	}.`
				// );
				solutions++;
			}
		}
	}

	return solutions;
};

const findMaxIntegerRightTriangles = (upperLimit) => {
	// store max number of solutions to compare
	let max = 0;
	// store value of perimeter with max number of solutions to return later
	let perimeter;
	// loop through numbers to upper limit, starting with smallest possible pythagorean perimeter of 12 (3,4,5)
	for (let p = 12; p <= upperLimit; p++) {
		// calculate number of possible pythagorean triples for given perimeter p
		const numberOfSolutions = findPythagoreanTriples(p);
		// compare to previous max value
		if (numberOfSolutions > max) {
			// if greater, set new max and new perimeter
			max = numberOfSolutions;
			perimeter = p;
		}
	}

	return perimeter;
};

console.log(findMaxIntegerRightTriangles(1000)); //840
