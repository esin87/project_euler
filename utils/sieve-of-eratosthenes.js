// use Sieve of Eratosthenes algorithm: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
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

module.exports = getPrimes;
