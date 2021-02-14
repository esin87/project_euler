// Problem 2: Sum of even Fibonacci sequence
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

const fibSeq = (upperLimit) => {
	//initialize a Fibonacci array with the first two desired terms
	let fibs = [1, 2];
	//loop over the Fib array
	for (let i = 0; i < fibs.length; i++) {
		//find the next Fib number in the sequence
		let nextFib = fibs[i] + fibs[i + 1];
		//if it's less than 4000000, add it to the array
		if (nextFib < upperLimit) {
			fibs.push(nextFib);
		}
	}
	//filter for even fibs, then sum them
	return fibs.filter((n) => n % 2 === 0).reduce((a, b) => a + b);
};

console.log(fibSeq(4000000));
// Result: 4613732
