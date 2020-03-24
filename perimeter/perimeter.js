// function adds the incoming height and width arguments
// then multiplies that sum by 2, giving the findPerimeter of the rectangle

function findPerimeter(height, width) {
	return (height + width) * 2;
}


console.log(`****** TESTING findPerimeter *******`)
console.log(`findPerimeter(6,7), expected: 26; actual:`, findPerimeter(6,7))
console.log(`findPerimeter(20,10), expected: 60; actual:`, findPerimeter(20,10))
console.log(`findPerimeter(2,9), expected: 22; actual:`, findPerimeter(2,9))