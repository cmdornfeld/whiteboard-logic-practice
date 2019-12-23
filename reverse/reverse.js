// function will check the type of the incoming bool
// if it is not a boolean, it will return the required string
// if it is a boolean, it will return the opposite of what it is
function reverse(bool) {
	if(typeof bool != 'boolean'){
		return 'boolean expected'
	}
	else {
		return !bool
	}
}


console.log(`****** TESTING reverse *******`)
console.log(`reverse(false), expected: true; actual:`, reverse(false))
console.log(`reverse(true), expected: false; actual:`, reverse(true))
console.log(`reverse(0), expected: 'boolean expected'; actual:`, reverse(0))
console.log(`reverse(null), expected: 'boolean expected'; actual:`, reverse(null))
console.log(`reverse(undefined), expected: 'boolean expected'; actual:`, reverse(undefined))
console.log(`reverse({}), expected: 'boolean expected'; actual:`, reverse({}))