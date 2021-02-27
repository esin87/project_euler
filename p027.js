// Quadratic primes
// Problem 27

// Euler discovered the remarkable quadratic formula:
// n^2 + n + 41

// It turns out that the formula will produce 40 primes for the consecutive integer values 0 <= n <= 39. However, when n = 40, 40^2 + 40 + 41 = 40(40 + 1) + 41 is divisible by 41, and certainly when n = 41, 41^2 + 41 + 41 is clearly divisible by 41.

// The incredible formula n^2 - 79n + 1601 was discovered, which produces 80 primes for the consecutive values 0 <= n <= 79. The product of the coefficients, −79 and 1601, is −126479.

// Considering quadratics of the form:

// n^2 + an + b, where |a| < 1000 and |b| < 1000

// where |n| is the modulus/absolute value of n
// e.g.  |11| = 11 and |-4| = 4

// Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n=0.

// use same Sieve of Eratosthenes algorithm from Problem 10: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
const getPrimes = (upperLimit) => {
	// create an empty array with values of true at each index based on upperLimit
	const sieve = new Array(upperLimit).fill(true);
	// 0 and 1 are not considered prime
	sieve[0] = false;
	sieve[1] = false;
	// start looping at possible primes from 2, up through and including upperLimit
	for (let p = 2; p <= upperLimit; p++) {
		// if there is a truthy value for the sieve array at index p
		if (sieve[p]) {
			// loop through all multiples of p and set their value to false as they are not prime since they're divisible by p
			for (let j = p * p; j < upperLimit; j += p) {
				sieve[j] = false;
			}
		}
	}

	// return the array of booleans -- indices with values of true correspond to prime numbers
	return sieve;
};

// got a lot of help from Kristian Edlundson's blog post on this problem: https://www.mathblog.dk/project-euler-27-quadratic-formula-primes-consecutive-values/
const findQuadraticPrimes = (nLimit) => {
	// initialize variables to store maximum values of a, b, and n
	let aMax = 0;
	let bMax = 0;
	let nMax = 0;
	// create a primes array for numbers up to 87400
	const primes = getPrimes(87400);
	// outer loop to find a, starting at inverse of nLimit, going up to and including nLimit
	for (let a = -nLimit; a <= nLimit; a++) {
		// inner loop to find b with same conditions as above
		for (let b = -nLimit; b <= nLimit; b++) {
			// start at n = 0
			let n = 0;
			// keep incrementing n as long as quadratic prime formula returns true for a number in the primes array,
			while (primes[Math.abs(n * n + a * n + b)]) {
				n++;
			}

			// when loop looking for primes breaks, check if current value of n is greater than nMax
			if (n > nMax) {
				// if so, update values of max a, b, and n values accordingly
				aMax = a;
				bMax = b;
				nMax = n;
			}
		}
	}

	return aMax * bMax;
};

console.log(findQuadraticPrimes(1000)); // -59231
// The maximum value of a is -61, the maximum value of b is 971, and their product is -59231
// n^2 - 61n + 971
