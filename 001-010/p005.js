const { performance } = require('perf_hooks');
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

////////////////////////////////////
// BRUTE FORCE (w/some optimization)
////////////////////////////////////
const maxProduct = (upperLimit) => {
	let maxProduct = 1;
	for (let i = upperLimit; i > 0; i--) {
		maxProduct *= i;
	}
	return maxProduct;
};

const smallestNumber = (upperLimit) => {
	//get maximum product;
	let smallestProduct = maxProduct(upperLimit);
	//divide out one number
	for (let i = upperLimit; i > 0; i--) {
		const tempProduct = smallestProduct / i;
		for (let j = upperLimit; j > 0; j--) {
			//check if the other numbers are divisible
			if (j === 1 && tempProduct % j === 0) {
				if (tempProduct < smallestProduct) {
					smallestProduct = tempProduct;
				}
			} else if (tempProduct % j === 0) {
				continue;
			} else {
				break;
			}
		}
	}
	return smallestProduct;
};

// performance function: https://www.techiedelight.com/measure-execution-time-method-javascript/
function run_function(func, arg) {
	var t0 = performance.now();

	func(arg); // <---- The function you're measuring time for

	var t1 = performance.now();
	console.log(
		`Call to ${func.name} with argument ${arg} took ${t1 - t0} milliseconds`
	);
}

console.log(smallestNumber(10));
// 2520

console.log(smallestNumber(20));
// 232792560

//checking performance:
run_function(smallestNumber, 10);
run_function(smallestNumber, 20);

// idea for optimization: least common multiple: http://www.math.com/school/subject1/lessons/S1U3L3DP.html#:~:text=One%20way%20to%20find%20the,prime%20factors%20of%20each%20number.&text=Then%20multiply%20each%20factor%20the,number%20of%20times%20it%20occurs.
