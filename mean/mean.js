// function loops through each number of the nums array
// the sum variable starts at 0 and has each number added to it, in order to get the total sum
// function then returns the total sum divided by the number of numbers in the nums array
// toFixed(1) shortens the answer of sum/nums.length to only 1 decimal place, but as a string
// Number turns that string into a number
function mean(nums) {
	let sum = 0;
	for(let i of nums){
		sum += i
	}
	return Number((sum / nums.length).toFixed(1));
}


console.log(`****** TESTING mean *******`)
console.log(`mean([1, 1, 2, 2, 3, 5, 5, 5, 7]), expected: 3.4; actual:`, mean([1, 1, 2, 2, 3, 5, 5, 5, 7]))
console.log(`mean([1, 2, 2, 3, 7, 9, 10]), expected: 4.9; actual:`, mean([1, 2, 2, 3, 7, 9, 10]))
console.log(`mean([1, 2, 3, 4, 5, 6, 6, 10, 10]), expected: 5.2; actual:`, mean([1, 2, 3, 4, 5, 6, 6, 10, 10]))
console.log(`mean([1, 2, 2, 2, 3, 4, 4, 4, 6]), expected: 3.1; actual:`, mean([1, 2, 2, 2, 3, 4, 4, 4, 6]))
console.log(`mean([10, 5, 10]), expected: 8.3; actual:`, mean([10, 5, 10]))
console.log(`mean([3, 5, -1, -2]), expected: 1.3; actual:`, mean([3, 5, -1, -2]))