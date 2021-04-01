// Circular primes
// Problem 35
// The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

// There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

// How many circular primes are there below one million?

// helper function to get permutations
const getRotations = (arr) => {
	const results = [];
	let count = 0;
	while (count < arr.length) {
		const result = arr.join('');
		if (!results.includes(result)) {
			results.push(result);
		}
		const first = arr.shift();
		arr.push(first);
		count++;
	}

	// return results array sorted in ascending order
	return results.map((x) => parseInt(x)).sort((a, b) => a - b);
};

const getPrimes = (upperLimit) => {
	// sieve of eratosthenes generates an array of booleans, indices corresponding to numbers and values that are booleans, true if index is a prime number
	// https://stackoverflow.com/questions/17524685/project-euler-10-python/18232279#18232279
	const sieve = new Array(upperLimit).fill(true);
	for (let p = 2; p < upperLimit; p++) {
		if (sieve[p]) {
			// make all multiples of p false
			for (let j = p * p; j < upperLimit; j += p) {
				sieve[j] = false;
			}
		}
	}
	return sieve;
};

const getCircularPrimes = (upperLimit) => {
	let count = 0;
	const sieve = getPrimes(upperLimit);
	// loop through array and check if all permutations of primes are true;
	for (let i = 2; i < sieve.length; i++) {
		// if the number is prime
		if (sieve[i]) {
			// get rotations of the number
			const perms = getRotations(i.toString().split(''));
			if (perms.every((x) => sieve[x])) {
				count += perms.length;
				perms.forEach((x) => {
					sieve[x] = false;
				});
			}
		}
	}

	return count;
};

// console.log(getCircularPrimes(100)); //13
// console.log(getCircularPrimes(1000)); //25
// console.log(getCircularPrimes(1000000)); //55
