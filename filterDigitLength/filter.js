// function filters through each number of the array
// it turns each number into a string and checks its length against the num parameter
// if the length matches the num parameter, it adds that number to an array
// returns the array with all matching numbers
function filterDigitLength(arr, num) {
	return arr.filter(i => i.toString().length === num);
}


console.log(`****** TESTING filterDigitLength *******`)
console.log(`filterDigitLength([88, 232, 4, 9721, 555], 3), expected: [232, 555]; actual:`, filterDigitLength([88, 232, 4, 9721, 555], 3))
console.log(`filterDigitLength([2, 7, 8, 9, 1012], 1), expected: [2, 7, 8, 9]; actual:`, filterDigitLength([2, 7, 8, 9, 1012], 1))
console.log(`filterDigitLength([32, 88, 74, 91, 300, 4050], 1), expected: []; actual:`, filterDigitLength([32, 88, 74, 91, 300, 4050], 1))
console.log(`filterDigitLength([5, 6, 8, 9], 1), expected: [5, 6, 8, 9]; actual:`, filterDigitLength([5, 6, 8, 9], 1))
console.log(`filterDigitLength([99, 838, 435, 7666, 989, 431], 3), expected: [838, 435, 989, 431]; actual:`, filterDigitLength([99, 838, 435, 7666, 989, 431], 3))
console.log(`filterDigitLength([99, 838, 435, 7666, 989, 431], 2), expected: [99]; actual:`, filterDigitLength([99, 838, 435, 7666, 989, 431], 2))