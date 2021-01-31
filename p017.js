// Number letter counts
// Show HTML problem content
// Problem 17
// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

const numDict = {
	1: 'one',
	2: 'two',
	3: 'three',
	4: 'four',
	5: 'five',
	6: 'six',
	7: 'seven',
	8: 'eight',
	9: 'nine',
	10: 'ten',
	11: 'eleven',
	12: 'twelve',
	13: 'thirteen',
	14: 'fourteen',
	15: 'fifteen',
	16: 'sixteen',
	17: 'seventeen',
	18: 'eighteen',
	19: 'nineteen',
	20: 'twenty',
	30: 'thirty',
	40: 'forty',
	50: 'fifty',
	60: 'sixty',
	70: 'seventy',
	80: 'eighty',
	90: 'ninety',
	100: 'hundred',
	1000: 'one thousand',
};

const getNumOverOneHundred = (n) => {
	const baseHundred = numDict[(n - (n % 100)).toString().charAt(0)];
	let baseTen;
	let remainder;
	n -= n - (n % 100);
	if (n === 0) {
		baseTen = '';
		remainder = '';
	} else if (n < 20) {
		console.log(n);
		baseTen = 'and' + numDict[n.toString()];
		remainder = '';
	} else {
		baseTen = numDict[(n - (n % 10)).toString()]
			? 'and' + numDict[(n - (n % 10)).toString()]
			: '';
		remainder = numDict[(n % 10).toString()]
			? `${baseTen ? '' : 'and'}${numDict[(n % 10).toString()]}`
			: '';
	}

	const result = baseHundred + 'hundred' + baseTen + remainder;
	return result.length;
};

const getNumFromTwentyToHundred = (n) => {
	const baseTen = numDict[(n - (n % 10)).toString()];
	const remainder = numDict[(n % 10).toString()];
	const result = baseTen + `${remainder ? remainder : ''}`;
	return result.length;
};

const getNumTwentyAndUnder = (n) => {
	const result = numDict[n.toString()];
	return result.length;
};

const getNumberLetterCounts = (n, i = 1, sum = 0) => {
	if (i > n) return sum;

	if (i === 100) {
		sum += 'onehundred'.length;
	}

	if (i === 1000) {
		sum += 'onethousand'.length;
	}

	if (i <= 20) {
		sum += getNumTwentyAndUnder(i);
	}

	if (i > 20 && i < 100) {
		sum += getNumFromTwentyToHundred(i);
	}

	if (i > 100 && i < 1000) {
		sum += getNumOverOneHundred(i);
	}

	i++;

	return getNumberLetterCounts(n, i, sum);
};

console.log(getNumberLetterCounts(5)); //19
console.log(getNumberLetterCounts(1000)); //21124

// dry this up ... how can the helper functions be consolidated? how to take more mathematical approach
