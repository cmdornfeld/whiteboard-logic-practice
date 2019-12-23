// function will loop through all of the keys in the object
// if no keys exist, it will return false
// if a key exist in the obj, it will return true
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