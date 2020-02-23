// Problem 3
// Largest prime factor

// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

const findLargestPrimeFactor = num => {
	//initialize primes array
	let primes = [];

	//divide by two until no longer even
	while (num % 2 === 0) {
		primes.push(2);
		num = num / 2;
	}

	//use square root of the number as max value of for loop, initializing loop with three as the next prime factor and incrementing divisor by one
	for (let i = 3; i < Math.sqrt(num); i++) {
		while (num % i === 0) {
			primes.push(i);
			num = num / i;
		}
	}

	//if the remaining number is greater than 2, add it to the primes array as a factor
	if (num > 2) {
		primes.push(num);
	}

	return Math.max(...primes);
};

console.log(findLargestPrimeFactor(24));
//3
console.log(findLargestPrimeFactor(56));
//7
console.log(findLargestPrimeFactor(13195));
//29
console.log(findLargestPrimeFactor(600851475143));
// 6857
