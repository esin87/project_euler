// Pandigital multiples
// Problem 38
// Take the number 192 and multiply it by each of 1, 2, and 3:

// 192 × 1 = 192
// 192 × 2 = 384
// 192 × 3 = 576
// By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1,2,3)

// The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).

// What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ... , n) where n > 1?

// isPandigital helper function checks to see if a given numerical string is 1-9 pandigital
const isPandigital = (num) => {
	// reference sorted pandigital numerical string for comparison
	const digits = '123456789';
	// split and sort the input numerical string
	const sortedNumStr = num.split('').sort().join('');

	// return boolean if the input string equals the reference digits
	return digits === sortedNumStr;
};

const getMaxPandigitalMultiple = () => {
	let max = 0;

	// loop up to 5 max digits or half of pandigital max, since result must be concatenated with at least two products
	for (let i = 1; i < 99999; i++) {
		// store concatenated digits
		let result = '';
		// n is the integer factor
		let n = 1;
		// keep looping while the result is less than 9 digits long
		while (result.length < 9) {
			// add product of i and n to concatenated result
			result += n * i;
			// increment n
			n++;
		}

		// first check to see if the result is greater than the max to date
		// if so, check to see if it's pandigital
		if (parseInt(result) > max && isPandigital(result)) {
			// if both conditions pass, set new max equal to result
			max = result;
		}
	}

	return max;
};

console.log(getMaxPandigitalMultiple());
//932718654
