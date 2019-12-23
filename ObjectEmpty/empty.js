function isEmpty(obj) {
	for(let key in obj){
		return false
	}
	return true
}

console.log(`****** TESTING isEmpty *******`)
console.log(`isEmpty({}), expected: true; actual:`, isEmpty({}))
console.log(`isEmpty({a: 1}), expected: false; actual:`, isEmpty({a: 1}))
console.log(`isEmpty({z: 2, w: 4, y: 5}), expected: false; actual:`, isEmpty({z: 2, w: 4, y:5}))