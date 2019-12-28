// function checks each word of the words array
// and filters out each word that starts with the "initial" parameter
// into a new array, which is returned after all words have been checked
function dictionary(initial, words) {
	return words.filter(word => word.startsWith(initial));
}


console.log(`****** TESTING dictionary *******`)
console.log(`dictionary('bu', ['button', 'breakfast', 'border']), expected: ['button']; actual:`, dictionary('bu', ['button', 'breakfast', 'border']))
console.log(`dictionary('beau', ['pastry', 'delicious', 'name', 'boring']), expected: []; actual:`, dictionary('beau', ['pastry', 'delicious', 'name', 'boring']))
console.log(`dictionary('there', ['there', 'here', 'everywhere']), expected: ['there']; actual:`, dictionary('there', ['there', 'here', 'everywhere']))
console.log(`dictionary('ma', ['marriage', 'married', 'many', 'delight']), expected: ['marriage', 'married', 'many']; actual:`, dictionary('ma', ['marriage', 'married', 'many', 'delight']))
console.log(`dictionary('no', ['inferno', 'notion', 'nominate', 'note', 'fairy'])), expected: ['notion', 'nomiate', 'note']; actual:`, dictionary('no', ['inferno', 'notion', 'nominate', 'note', 'fairy']))