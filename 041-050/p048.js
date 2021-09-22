// Self powers
// Problem 48
// The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

// Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.

const findSumOfSelfPowers = (upperLimit) => {
	let sum = 0n;
	for (let i = 1; i <= upperLimit; i++) {
		sum += BigInt(i) ** BigInt(i);
	}

	const sumString = sum.toString();

	return sumString.substring(sumString.length - 10);
};

console.log(findSumOfSelfPowers(10)); //10405071317
console.log(findSumOfSelfPowers(1000)); //9110846700
