// Goldbach's other conjecture

// Problem 46
// It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.

// 9 = 7 + 2×1^2
// 15 = 7 + 2×2^2
// 21 = 3 + 2×3^2
// 25 = 7 + 2×3^2
// 27 = 19 + 2×2^2
// 33 = 31 + 2×1^2

// It turns out that the conjecture was false.

// What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?

// 1. Generate Primes
// use same Sieve of Eratosthenes algorithm from Problem 10: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
const getPrimes = (upperLimit) => {
	// create an empty array with values of true at each index based on upperLimit
	const sieve = new Array(upperLimit).fill(true);
	// 0 and 1 are not considered prime
	sieve[0] = false;
	sieve[1] = false;
	// start looping at possible primes from 2, up through and including upperLimit
	for (let p = 2; p < upperLimit; p++) {
		// if there is a truthy value for the sieve array at index p
		if (sieve[p]) {
			// loop through all multiples of p and set their value to false; they are not prime since they're divisible by p
			for (let j = p * p; j < upperLimit; j += p) {
				sieve[j] = false;
			}
		}
	}

	// return the array of booleans -- indices with values of true correspond to prime numbers
	return sieve;
};

// 1. Generate Squares
const getSquares = (upperLimit) => {
	const squares = new Array(upperLimit).fill(false);
	squares[0] = false;
	// start looping at possible squares from zero
	for (let i = 1; i < upperLimit; i++) {
		// if the square root of the number is an integer, it's a perfect square
		if (Math.sqrt(i) % 1 === 0) {
			squares[i] = true;
		}
	}

	// return the array of squares -- indices with values of true correspond to perfect squares
	return squares;
};

// find the number that doesn't fit Goldbach's conjecture
const disproveGoldbachsConjecture = (upperLimit) => {
	const primes = getPrimes(upperLimit);
	const squares = getSquares(upperLimit);
	// start checking at 9, the first odd composite number
	for (let i = 9; i < upperLimit; i += 2) {
		let conjecture = false;
		// first ensure it's not prime
		if (!primes[i]) {
			const comp = i;
			// loop backward through primes smaller than it
			for (let j = i - 1; j > 0; j--) {
				// if j is prime
				if (primes[j]) {
					const prime = j;
					for (let k = 1; k < upperLimit; k++) {
						// if k is a perfect square
						if (squares[k]) {
							const twiceSquare = 2 * Math.pow(Math.sqrt(k), 2);
							// check if goldbach's conjecture is true
							if (comp === prime + twiceSquare) {
								conjecture = true;
								// if it's true, break out of this loop
								break;
							}
						}
					}
					// if conjecture is true, break out of this loop
					if (conjecture) break;
				}
			}
		} else if (primes[i]) continue;
		// if the number does not pass the conjecture and is not prime, we've found the counter example
		if (!conjecture && !primes[i]) {
			return i;
		}
	}

	return 'All numbers pass';
};

// console.log(disproveGoldbachsConjecture(10000));
// 5777

// performance function: https://www.techiedelight.com/measure-execution-time-method-javascript/
function run_function(func, arg) {
	var t0 = performance.now();

	func(arg); // <---- The function you're measuring time for

	var t1 = performance.now();
	console.log(
		`Call to ${func.name} with argument ${arg} took ${t1 - t0} milliseconds`
	);
}

// run_function(disproveGoldbachsConjecture, 10000);
// Call to disproveGoldbachsConjecture with argument 10000 took 241.19854100001976 milliseconds
