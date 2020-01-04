// function will split the incoming "str" into elements of an array
// it will then reverse the order of the elements of that array
// finally, it will join the array elements back into a string
function reverse(str) {
	return str.split('').reverse().join('');
}

console.log(`****** TESTING reverse *******`)
console.log(`reverse("Think different."), expected: .tnereffid knihT; actual:`, reverse("Think different."))
console.log(`reverse("Innovation is the ability to see change as an opportunity - not a threat"), expected: taerht a ton - ytinutroppo na sa egnahc ees ot ytiliba eht si noitavonnI; actual:`, reverse("Innovation is the ability to see change as an opportunity - not a threat"))
console.log(`reverse("Quality is the best business plan."), expected: .nalp ssenisub tseb eht si ytilauQ; actual:`, reverse("Quality is the best business plan."))
console.log(`reverse("There is always one more thing to learn."), expected: .nrael ot gniht erom eno syawla si erehT; actual:`, reverse("There is always one more thing to learn."))