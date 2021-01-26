// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.

const getIterativeSequenceCount = (n, count = 1) => {
	if (n === 1) return count;

	if (n % 2) {
		n = 3 * n + 1;
	} else {
		n = n / 2;
	}

	count++;

	return getIterativeSequenceCount(n, count);
};

const getLongestChain = (upperLimit) => {
	let longestChain = 0;
	let startingNumber = 1;

	for (let i = startingNumber; i < upperLimit; i++) {
		const tempChain = getIterativeSequenceCount(i);
		if (tempChain > longestChain) {
			longestChain = tempChain;
			startingNumber = i;
		}
	}

	return startingNumber;
};

console.log(getLongestChain(1000000)); //837799
