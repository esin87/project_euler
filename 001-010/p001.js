// Problem 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

const multiplesOf3And5 = () => {
	let multiples = [];
	for (let i = 0; i < 1000; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			multiples.push(i);
		}
	}
	return multiples.reduce((a, b) => a + b);
};

// console.log(multiplesOf3And5());
//Answer: 233168

//slightly more concise version with JS array methods
const sumOfThreesAndFives = () => {
	return [...Array(1000).keys()]
		.filter((x) => x % 3 === 0 || x % 5 === 0)
		.reduce((a, b) => a + b);
};

// console.log(sumOfThreesAndFives());
//Answer: 233168
