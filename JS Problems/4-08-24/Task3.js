// Create a function that counts the integer's number of digits.

// Examples
// count(318) ➞ 3
// count(-92563) ➞ 5
// count(4666) ➞ 4
// count(-314890) ➞ 6
// count(654321) ➞ 6
// count(638476) ➞ 6

// Notes
// For an added challenge, try to solve this without using strings.
// Alternatively, you can solve this via a recursive approach.
// A reversion of this challenge can be found via this link.

function count(n) {
  return Math.abs(n).toString().length;
}
console.log(count(318));
console.log(count(-92563));
console.log(count(4666));
console.log(count(-314890));
console.log(count(654321));
console.log(count(638476));
