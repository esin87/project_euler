// Problem 3
// Largest prime factor

// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

const findLargestPrimeFactor = (num) => {
	if (num <= 1) return 'Input must be greater than 1';
	if (num === 2) return 2;

	for (let i = 2; i < Math.sqrt(num); i++) {
		while (num % i === 0) {
			num = num / i;
		}
	}

	return num;
};

console.log(findLargestPrimeFactor(24));
//3
console.log(findLargestPrimeFactor(56));
//7
console.log(findLargestPrimeFactor(13195));
//29
console.log(findLargestPrimeFactor(600851475143));
// 6857
