// Pandigital prime
// Problem 41
// We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.

// What is the largest n-digit pandigital prime that exists?

// isPandigital helper function checks to see if a given numerical string is 1-n pandigital
const isPandigital = (num) => {
	// reference sorted pandigital numerical string for comparison
	// adding the slice method extracts the same number of digits as the input string, making the function dynamic
	const digits = '123456789'.slice(0, num.length);
	// split and sort the input numerical string
	const sortedNumStr = num.split('').sort().join('');

	// return boolean if the input string equals the reference digits
	return digits === sortedNumStr;
};

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
			// loop through all multiples of p and set their value to false; they are not prime since they're divisible by p
			for (let j = p * p; j < upperLimit; j += p) {
				sieve[j] = false;
			}
		}
	}

	// return the array of booleans -- indices with values of true correspond to prime numbers
	return sieve;
};

const getLargestPandigitalPrime = () => {
	// get an array of primes first
	// upper limit is a seven digit pandigital number
	// Thanks to Kristian Edlundson for pointing out that 9 and 8-digit pandigital numbers can't be prime! https://www.mathblog.dk/project-euler-41-pandigital-prime/
	const primes = getPrimes(7654321);
	let max = 0;
	// loop through primes starting at smallest pandigital number
	for (let i = 21; i <= primes.length; i++) {
		// if i is prime, greater than max, and is pandigital
		if (primes[i] && i > max && isPandigital(i.toString())) {
			// set it equal to our new max
			max = i;
		}
	}

	return max;
};

console.log(getLargestPandigitalPrime()); // 7652413
