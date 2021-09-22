// Prime permutations
// Problem 49
// The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways: (i) each of the three terms are prime, and, (ii) each of the 4-digit numbers are permutations of one another.

// There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property, but there is one other 4-digit increasing sequence.

// What 12-digit number do you form by concatenating the three terms in this sequence?

const getPrimes = require('./utils/sieve-of-eratosthenes');

const getPrimeNums = (lowerLimit, upperLimit) => {
	const arr = getPrimes(upperLimit);
	return arr.reduce((acc, curVal, idx) => {
		if (curVal && idx >= lowerLimit && idx <= upperLimit) {
			acc.push(idx);
		}
		return acc;
	}, []);
};

const isPermutation = (num1, num2) => {
	const num1Str = num1.toString().split('').sort().join('');
	const num2Str = num2.toString().split('').sort().join('');
	return num1Str === num2Str;
};

const findPrimePermutations = () => {
	const primes = getPrimeNums(1000, 9999);
	const results = {};
	for (let i = 0; i < primes.length; i++) {
		results[primes[i]] = [];
		for (let j = 0; j < primes.length; j++) {
			if (isPermutation(primes[i], primes[j])) {
				results[primes[i]].push(primes[j]);
			}
		}
	}

	for (const num in results) {
		// skip the known sequence
		if (results[num].includes(1487)) continue;
		for (let i = 0; i < results[num].length - 2; i++) {
			for (let j = i + 1; j < results[num].length - 1; j++) {
				const diff = results[num][j] - results[num][i];
				if (results[num].includes(results[num][j] + diff)) {
					return `${results[num][i]}${results[num][j]}${
						results[num][j] + diff
					}`;
				}
			}
		}
	}
};
console.log(findPrimePermutations()); //296962999629
// numbers are: 2969, 6299, 9629
