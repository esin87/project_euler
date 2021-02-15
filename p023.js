// Non-abundant sums
// Problem 23
// A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

// A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

// As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

// Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

// import function to get sum of divisors of number n from problem 21
const getSumOfDivisors = require('./p021');

const getNonAbundantSums = () => {
	// initialize sum
	let sum = 0;

	// create am array to store abundant numbers
	const abundantNums = [];

	// loop over numbers up to 28123, as all numbers greater can be written as sum of two abundant numbers
	for (let i = 1; i <= 28123; i++) {
		// since 12 is the first abundant number, all numbers less than 12 are non-abundant numbers and cannot be expressed as the sum of two abundants, and should be added to the sum
		if (i < 12) {
			sum += i;
		} else {
			// check if number is abundant
			if (i < getSumOfDivisors(i)) {
				// if number is abundant, push it into abundant nums array;
				abundantNums.push(i);
			}

			// since 24 is the first sum of two abundant numbers, numbers less than 24 should be added to sum
			if (i < 24) {
				sum += i;
			} else {
				// else check to see if number i can be expressed as the sum of two numbers from the abundant numbers array
				// initialize abundantSum as false
				let abundantSum = false;
				// loop over abundant numbers array
				for (let j = 0; j < abundantNums.length; j++) {
					// calculate the remainder of subtracting current abundant num from j
					const remainder = i - abundantNums[j];
					// if the remainder is also in the abundant nums array
					if (abundantNums.includes(remainder)) {
						// the number i can be expressed as an abundant sum and loop can be broken out of early
						abundantSum = true;
						break;
					}
				}

				// if the number is not expressible as the sum of two abundant numbers, add it to the sum
				if (!abundantSum) {
					sum += i;
				}
			}
		}
	}
	return sum;
};

console.log(getNonAbundantSums());
// 4179871
