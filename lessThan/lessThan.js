// function returns true if the sum of the "a" parameter and the
// "b" parameter is less than 100
// if greater than or equal to 100, function returns false
function lessThan100(a, b) {
	if(a+b < 100){
		return true;
	}
	else {
		return false;
	}
}

console.log(`****** TESTING lessThan100 *******`)
console.log(`lessThan100(5, 57), expected: true; actual:`, lessThan100(5, 57));
console.log(`lessThan100(77, 30), expected: false; actual:`, lessThan100(77, 30));
console.log(`lessThan100(21, 79), expected: false; actual:`, lessThan100(21, 79));
console.log(`lessThan100(5, 89), expected: true; actual:`, lessThan100(5, 89))
console.log(`lessThan100(-1, 101), expected: false; actual:`, lessThan100(-1, 101))