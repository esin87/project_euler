// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

// brute force
const findNthPrime = (n) => {
	let nthPrime = 2;
	let nextNumber = 3;
	let index = 1;

	//outer  loop continues while current index is less than n
	while (index < n) {
		// establish whether the next number is prime or not
		let isPrime = true;
		// loop over possible factors starting at 2
		for (let i = 2; i <= Math.sqrt(nextNumber); i++) {
			// if the number is divisible by the factor with no remainder it's not prime and break out of the loop
			if (nextNumber % i === 0) {
				isPrime = false;
				break;
			}
		}
		// if the number is prime after checking all factors push it into primes array and increment current index
		if (isPrime) {
			nthPrime = nextNumber;
			index++;
		}

		// increment to next number by two (only check odd numbers after two)
		nextNumber += 2;
	}

	return nthPrime;
};

console.log(findNthPrime(1)); //2
console.log(findNthPrime(2)); //3
console.log(findNthPrime(6)); //13
console.log(findNthPrime(10001)); //104743
