// Distinct primes factors
// Problem 47
// The first two consecutive numbers to have two distinct prime factors are:

// 14 = 2 × 7
// 15 = 3 × 5

// The first three consecutive numbers to have three distinct prime factors are:

// 644 = 2² × 7 × 23
// 645 = 3 × 5 × 43
// 646 = 2 × 17 × 19.

// Find the first four consecutive integers to have four distinct prime factors each. What is the first of these numbers?
const checkPerformance = require('./utils/performance');

// Helper function to get prime factorization of number
const getPrimeFactorization = (n) => {
	const factors = [];
	while (n % 2 === 0) {
		factors.push(2);
		n /= 2;
	}

	for (let i = 3; i < Math.sqrt(n); i++) {
		while (n % i === 0) {
			factors.push(i);
			n /= i;
		}
	}

	if (n > 2) {
		factors.push(n);
	}

	return factors;
};

const findDistinctPrimeFactors = (upperLimit) => {
	for (let i = 1; i <= upperLimit; i++) {
		const setOne = new Set(getPrimeFactorization(i));
		if (setOne.size === 4) {
			const setTwo = new Set(getPrimeFactorization(i + 1));
			if (setTwo.size === 4) {
				const setThree = new Set(getPrimeFactorization(i + 2));
				if (setThree.size === 4) {
					const setFour = new Set(getPrimeFactorization(i + 3));
					if (setFour.size === 4) {
						return i;
					} else continue;
				} else continue;
			} else continue;
		} else continue;
	}
	return 'none found';
};

console.log(findDistinctPrimeFactors(1000000));
// 134043

checkPerformance(findDistinctPrimeFactors, 1000000);
// Call to findDistinctPrimeFactors with argument 1000000 took 92.28278700006194 milliseconds
