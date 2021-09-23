// Consecutive prime sum
// Problem 50
// The prime 41, can be written as the sum of six consecutive primes:

// 41 = 2 + 3 + 5 + 7 + 11 + 13
// This is the longest sum of consecutive primes that adds to a prime below one-hundred.

// The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.

// Which prime, below one-million, can be written as the sum of the most consecutive primes?

const getPrimes = require('../utils/sieve-of-eratosthenes');

const getPrimeNums = (upperLimit) => {
	const arr = getPrimes(upperLimit);
	return arr.reduce((acc, curVal, idx) => {
		if (curVal && idx <= upperLimit) {
			acc.push(idx);
		}
		return acc;
	}, []);
};

const getConsecutivePrimeSum = (upperLimit) => {
	const primes = getPrimeNums(upperLimit);
	let longest = 0;
	let result;
	for (let i = 1; i < primes.length; i++) {
		const targetPrime = primes[i];
		let startingIndex = 0;
		while (startingIndex < i) {
			let sum = 0;
			let count = 0;
			for (let j = startingIndex; j < i; j++) {
				sum += primes[j];
				count++;
				if (sum === targetPrime && count >= longest) {
					longest = count;
					result = targetPrime;
				}
				if (sum > targetPrime) {
					break;
				}
			}
			startingIndex++;
		}
	}

	return result;
};

// console.log(getConsecutivePrimeSum(100)); //41
// console.log(getConsecutivePrimeSum(1000)); //953
console.log(getConsecutivePrimeSum(1000000)); //997651
// This solution takes too long and needs to be refactored with caching
