// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

// brute force
const findPythagoreanTriples = (sum) => {
	let a, b, c;
	// loop through possibilities for a (a cannot be greater than a third of the sum)
	for (a = 1; a < sum / 3; a++) {
		// loop through possibilities for b, starting at a+ 1 (b cannot be greater than half of the sum)
		for (b = a + 1; b < sum / 2; b++) {
			c = sum - a - b;
			if (a ** 2 + b ** 2 === c ** 2) {
				return `The value of a is ${a}, the value of b is ${b}, and the value of c is ${c}. The product is ${
					a * b * c
				}.`;
			}
		}
	}

	return 'No Pythagorean triplet found.';
};

console.log(findPythagoreanTriples(12)); //60

console.log(findPythagoreanTriples(1000)); //31875000
