// Coin sums
// Problem 31
// In the United Kingdom the currency is made up of pound (£) and pence (p). There are eight coins in general circulation:

// 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), and £2 (200p).
// It is possible to make £2 in the following way:

// 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
// How many different ways can £2 be made using any number of coins?

// brute force
// got a lot of help from kristian edlundson's blog post on this problem: https://www.mathblog.dk/project-euler-31-combinations-english-currency-denominations/
const getCurrencyCombinations = () => {
	let results = 0;
	let total = 200;

	for (let twoPound = total; twoPound >= 0; twoPound -= 200) {
		for (let onePound = twoPound; onePound >= 0; onePound -= 100) {
			for (let fiftyP = onePound; fiftyP >= 0; fiftyP -= 50) {
				for (let twentyP = fiftyP; twentyP >= 0; twentyP -= 20) {
					for (let tenP = twentyP; tenP >= 0; tenP -= 10) {
						for (let fiveP = tenP; fiveP >= 0; fiveP -= 5) {
							for (let twoP = f; twoP >= 0; twoP -= 2) {
								results++;
							}
						}
					}
				}
			}
		}
	}

	return results;
};

console.log(getCurrencyCombinations());
//73682
