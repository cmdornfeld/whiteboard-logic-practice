// function returns the sum of the following (total number of cups):
// "n" parameter divided by 6, rounded down to the nearest whole number (for total number of extra cups)
// plus the "n" parameter (total number of cups purchased)
function totalCups(n) {
    return n + Math.floor(n/6)
}


console.log(`****** TESTING totalCups *******`)
console.log(`totalCups(5), expected: 5; actual:`, totalCups(5));
console.log(`totalCups(6), expected: 7; actual:`, totalCups(6));
console.log(`totalCups(213), expected: 248; actual:`, totalCups(213));
console.log(`totalCups(800), expected: 933; actual:`, totalCups(800))
console.log(`totalCups(12), expected: 14; actual:`, totalCups(12))