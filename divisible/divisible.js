// function will loop through all of the numbers in the array
// it will add each number to the sum total
// it will multiply each number to the product total
// finally, it will check if there is a remained when dividing the total product by the total sum
function divisible(arr) {
	let sum = 0
	let product = 1
	for(let num of arr){
		sum += num
		product *= num
	}
	if(product%sum === 0){
		return true;
	}
	else {
        return false;
    }
}

console.log(`****** TESTING divisible *******`)
console.log(`divisible([3, 2, 4, 1]), expected: false; actual:`, divisible([3, 2, 4, 1]))
console.log(`divisible([4, 4, 4, 4]), expected: true; actual:`, divisible([4, 4, 4, 4]))
console.log(`divisible([4, 2, 6]), expected: true; actual:`, divisible([4, 2, 6]))
console.log(`divisible([1, 1, 1, 1, 10]), expected: false; actual:`, divisible([1, 1, 1, 1, 10]))
console.log(`divisible([10, 5, 10]), expected: true; actual:`, divisible([10, 5, 10]))
console.log(`divisible([3, 5, 1]), expected: false; actual:`, divisible([3, 5, 1]))