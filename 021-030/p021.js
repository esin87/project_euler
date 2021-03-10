// Amicable numbers
// Problem 21
// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
// If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

// Evaluate the sum of all the amicable numbers under 10000.

// helper function -- get the sum of divisors of n
const getSumOfDivisors = (n) => {
	let sum = 1;

	for (let i = 2; i <= n / 2; i++) {
		if (n % i === 0) {
			sum += i;
		}
	}

	return sum;
};

// console.log(getSumOfDivisors(220)); //284
// console.log(getSumOfDivisors(284)); //220

// brute force approach
const getSumOfAllAmicableNums = (upperLimit) => {
	let sum = 0;

	for (let i = 2; i < upperLimit; i++) {
		const a = i;
		const dOfA = getSumOfDivisors(a);
		const b = dOfA;
		const dOfB = getSumOfDivisors(b);
		if (a < dOfA && dOfA === b && dOfB == a) {
			sum += a + dOfA;
		}
	}

	return sum;
};

// console.log(getSumOfAllAmicableNums(10000)); //31626

module.exports = getSumOfDivisors;
