// You are given the following information, but you may prefer to do some research for yourself.

// 1 Jan 1900 was a Monday.
// Thirty days has September,
// April, June and November.
// All the rest have thirty-one,
// Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

// inspired by Kristian Edlund as usual
const getFirstSundays = (startYear, endYear, month = 0, firstSundays = 0) => {
	// exit case: if startYear is greater than endYear, return count of first sundays
	if (startYear > endYear) return firstSundays;

	// action step
	// use JS Date Object with year, month, and first day of the month
	const d = new Date(startYear, month, 1);

	// if the day of the week is 0 (Sunday), increment firstSundays count
	if (d.getDay() === 0) firstSundays++;

	// increment month
	month++;

	// if incremented month is 13
	if (month === 13) {
		// increment year and set month back to january
		startYear++;
		month = 1;
	}

	// recursion: call itself with updated params
	return getFirstSundays(startYear, endYear, month, firstSundays);
};

console.log(getFirstSundays(1901, 2000)); //171
