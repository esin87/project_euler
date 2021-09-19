// performance function: https://www.techiedelight.com/measure-execution-time-method-javascript/
function runFunction(func, arg) {
	var t0 = performance.now();

	func(arg); // <---- The function you're measuring time for

	var t1 = performance.now();
	console.log(
		`Call to ${func.name} with argument ${arg} took ${t1 - t0} milliseconds`
	);
}

module.exports = runFunction;
