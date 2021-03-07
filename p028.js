// Number spiral diagonals
// Problem 28
// Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

// 21 22 23 24 25
// 20  7  8  9 10
// 19  6  1  2 11
// 18  5  4  3 12
// 17 16 15 14 13

// It can be verified that the sum of the numbers on the diagonals is 101.

// What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
const getSpiralDiagonalSum = (dimensions) => {
	// split the problem into smaller parts by calculating the addends on the diagonals
	let seAddend = 1;
	let swAddend = 1;
	let nwAddend = 1;
	let neAddend = 1;
	// initialize the sum at 1, the center of the spiral
	let sum = 1;
	// n is the number by which the addend increases as you spiral around
	let n = 2;
	for (let i = 1; i <= dimensions / 2; i++) {
		// se addend increases by n, then add to sum
		seAddend += n;
		sum += seAddend;
		// increase n as we spiral to next diagonal in clockwise fashion
		n += 2;
		// sw addend increases by n, then add to sum
		swAddend += n;
		sum += swAddend;
		// increase n as we spiral to next diagonal in clockwise fashion
		n += 2;
		// nw addend increases by n then add it to sum
		nwAddend += n;
		sum += nwAddend;
		// increase n as we spiral to next diagonal in clockwise fashion
		n += 2;
		// ne addend increases by n then add it to sum
		neAddend += n;
		sum += neAddend;
		// increase n as we spiral back to se diagonal in clockwise fashion
		n += 2;
	}

	return sum;
};

console.log(getSpiralDiagonalSum(5)); // 101
console.log(getSpiralDiagonalSum(1001)); //669 171 001
