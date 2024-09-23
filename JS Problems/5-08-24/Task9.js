// Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.
// Examples
// removeLeadingTrailing("230.000") ➞ "230"
// removeLeadingTrailing("00402") ➞ "402"
// removeLeadingTrailing("03.1400") ➞ "3.14"
// removeLeadingTrailing("30") ➞ "30"
// Notes
// Return a string.
// If you get a number with .0 on the end, return the integer value (e.g. return "4" rather than "4.0").
// If the number is 0, 0.0, 000, 00.00, etc... return "0".

function removeLeadingTrailing(n) {
	return parseFloat(n).toString()  // we can also used parseFloat() 
}
console.log(removeLeadingTrailing("230.000"));
console.log(removeLeadingTrailing("00402"));
console.log(removeLeadingTrailing("03.1400"));
console.log(removeLeadingTrailing("30"));



