// Permuted multiples

// Problem 52
// It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.

// Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.
const runFunction = require('../utils/performance');

function getSmallestPermutedMultiple() {
	let i = 1;
	while (true) {
		const multiplesArr = generateMultiples(i);
		const success = checkIfPermutations(multiplesArr);
		if (success) {
			return multiplesArr[0];
		} else {
			i++;
		}
	}
}

function generateMultiples(i) {
	const nums = [i];
	for (let j = 2; j <= 6; j++) {
		nums.push(i * j);
	}
	return nums;
}

function checkIfPermutations(arr) {
	const sortedDigits = arr[0].toString().split('').sort();
	const numStr = sortedDigits.join('');
	for (let i = 1; i < arr.length; i++) {
		const temp = arr[i].toString().split('').sort();
		const tempStr = temp.join('');
		if (tempStr !== numStr) {
			return false;
		}
	}
	return true;
}

console.log(getSmallestPermutedMultiple()); // 142857
