// Truncatable primes
// Problem 37
// The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

// Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

// NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.

const getPrimes = (upperLimit) => {
	// sieve of eratosthenes generates an array of booleans, indices corresponding to numbers and values that are booleans, true if index is a prime number
	// https://stackoverflow.com/questions/17524685/project-euler-10-python/18232279#18232279
	const sieve = new Array(upperLimit).fill(true);
	// set 0 and 1 as non-primes
	sieve[0] = false;
	sieve[1] = false;
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

const getTruncatedNums = (digitsArr) => {
	const results = [digitsArr.join('')];
	const nums1 = [...digitsArr];
	const nums2 = [...digitsArr];
	// get left to right truncated numbers
	for (let i = 0; i <= nums1.length + 1; i++) {
		// remove first digit
		nums1.shift();
		results.push(nums1.join(''));
	}

	// get right to left truncated numbers
	for (let i = nums2.length - 1; i >= 0; i--) {
		// remove last digit
		nums2.pop();
		results.push(nums2.join(''));
	}

	return results.filter((x) => x).map((x) => parseInt(x));
};

const getTruncatablePrimes = () => {
	const sieve = getPrimes(1000000);
	let sum = 0;
	let count = 0;
	// start loop with two digit primes
	for (let i = 11; i < sieve.length; i += 2) {
		// exit loop once 11 truncatable primes are found
		if (count === 11) break;
		// check if i is prime per sieve
		if (sieve[i]) {
			// get the truncated numbers for the prime number
			const truncatedNums = getTruncatedNums(i.toString().split(''));
			// check to see if each of the truncated numbers are primes too
			const allPrime = truncatedNums.every((x) => sieve[x]);
			if (allPrime) {
				sum += i;
				count++;
			}
		}
	}

	return sum;
};

console.log(getTruncatablePrimes()); //748317
