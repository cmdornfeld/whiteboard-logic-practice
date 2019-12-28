// function will split the incoming "str" into elements of an array
// it will then reverse the order of the elements of that array
// finally, it will join the array elements together as: lastName firstName
function nameShuffle(str) {
	return str.split(' ').reverse().join(' ');
}


console.log(`****** TESTING nameShuffle *******`)
console.log(`nameShuffle("Ebony Greene"), expected: Greene Ebony; actual:`, nameShuffle("Ebony Greene"))
console.log(`nameShuffle("Ken Kennedy"), expected: Kennedy Ken; actual:`, nameShuffle("Ken Kennedy"))
console.log(`nameShuffle("Allison Gonzalez"), expected: Gonzalez Allison; actual:`, nameShuffle("Allison Gonzalez"))
console.log(`nameShuffle("Albert Frazier"), expected: Frazier Albert; actual:`, nameShuffle("Albert Frazier"))
console.log(`nameShuffle("Donnie Welch"), expected: Welch Donnie; actual:`, nameShuffle("Donnie Welch"))
console.log(`nameShuffle("Abby Johnson"), expected: Johnson Abby; actual:`, nameShuffle("Abby Johnson"))