// Reciprocal cycles
// Problem 26
// A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

// 1/2	= 	0.5
// 1/3	= 	0.(3)
// 1/4	= 	0.25
// 1/5	= 	0.2
// 1/6	= 	0.1(6)
// 1/7	= 	0.(142857)
// 1/8	= 	0.125
// 1/9	= 	0.(1)
// 1/10	= 	0.1
// Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

// Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.

// needed a lot of help from Kristian Edlundson for this problem: https://www.mathblog.dk/project-euler-26-find-the-value-of-d-1000-for-which-1d-contains-the-longest-recurring-cycle/

const getLongestReciprocalCycle = (d) => {
	// store number, d, where 1 / d produces the longest recurring decimal cycle
	let num = d;
	// store max cycle value
	let maxLength = 0;
	// start outer loop from upper limit and decrement, since we are looking for the longest recurring cycle
	for (let i = d - 1; i > 1; i--) {
		// if maxLength is greater than or equal to i, break outer loop because max recurring decimal cycles are i - 1
		if (maxLength >= i) break;
		// add foundRemainders to this array so that repeats break the inner while loop
		const foundRemainders = [];
		// track value of remainders on the decimal place at position
		let value = 1;
		// track the number of decimal places
		let position = 1;
		// loop for each i while the value of the remainder does not exist in found remainders, and while the value of the remainder is not 0 (which would mean it's evenly divisible)
		while (foundRemainders.indexOf(value) === -1 && value != 0) {
			foundRemainders.push(value);
			// set the new value of the remainder equal to the remainder of the previous remainder times 10 divided by i
			value = (value * 10) % i;
			// increment position as we are at at the next decimal place
			position++;
		}

		// if the number of decimal places in the recurring cycle is greater than previous maxLength
		if (position > maxLength) {
			// set num equal to i
			num = i;
			// update maxLength with the greater number of decimal places
			maxLength = position;
		}
	}

	return num;
};

console.log(getLongestReciprocalCycle(10)); //7
console.log(getLongestReciprocalCycle(1000)); //983
