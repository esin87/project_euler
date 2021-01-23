// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

// brute force ... takes forever ... how to refactor? 🤔
// const sumOfPrimes = (upperLimit) => {
// 	let sum = 0;
// 	// loop through numbers starting at two (first prime) up to upper limit
// 	if (upperLimit > 2) sum += 2;

// 	for (let i = 3; i < upperLimit; i += 2) {
// 		let isPrime = true;
// 		for (let j = 3; j < i; j += 2) {
// 			if (i !== j && i % j === 0) {
// 				isPrime = false;
// 				break;
// 			}
// 		}

// 		if (isPrime) sum += i;
// 	}
// 	return sum;
// };

// sieve of eratosthenes
// https://stackoverflow.com/questions/17524685/project-euler-10-python/18232279#18232279
const sumOfPrimes = (upperLimit) => {
	let sum = 0;
	let sieve = new Array(upperLimit).fill(true);
	for (let p = 2; p < upperLimit; p++) {
		if (sieve[p]) {
			sum += p;
			for (let j = p * p; j < upperLimit; j += p) {
				sieve[j] = false;
			}
		}
	}

	return sum;
};
console.log(sumOfPrimes(10)); //17
console.log(sumOfPrimes(2000000)); // 142913828922
