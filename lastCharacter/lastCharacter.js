// function checks if the incoming word end with an "n"
// returns true if the word does; returns false if not

function isLastCharacterN(word) {
	if(word.endsWith('n')){
		return true;
	}
	else {
		return false;
	}
}


console.log(`****** TESTING isLastCharacterN *******`)
console.log(`isLastCharacterN("Aiden"), expected: true; actual:`, isLastCharacterN("Aiden"))
console.log(`isLastCharacterN("Roxy"), expected: false; actual:`, isLastCharacterN("Roxy"))
console.log(`isLastCharacterN("Bert"), expected: false; actual:`, isLastCharacterN("Bert"))
console.log(`isLastCharacterN("Dean"), expected: true; actual:`, isLastCharacterN("Dean"))
console.log(`isLastCharacterN("Daniel"), expected: false; actual:`, isLastCharacterN("Daniel"))
console.log(`isLastCharacterN("Brian"), expected: true; actual:`, isLastCharacterN("Brian"))