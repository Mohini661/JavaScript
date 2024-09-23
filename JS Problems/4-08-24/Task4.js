// A repdigit is a positive number composed out of the same digit. Create a function that takes an integer and returns whether it's a repdigit or not.

// Examples
// isRepdigit(66) ➞ true
// isRepdigit(0) ➞ true
// isRepdigit(-11) ➞ false

// Notes
// The number 0 should return true (even though it's not a positive number).
// Check the Resources tab for more info on repdigits.

function isRepdigit(num) {
  const str = num.toString();
//   if (num < 0) return false;
  for (let i = 0; i < str.length; i++) {
    if (num >= 0 && str[0] === str[i]) {
      return true;
    }
    return false;
  }
}
console.log(isRepdigit(6666));
console.log(isRepdigit(-11));
console.log(isRepdigit(0));
