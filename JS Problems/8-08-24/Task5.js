// Create a function that squares every digit of a number.

// Examples
// squareDigits(9119) ➞ 811181
// squareDigits(2483) ➞ 416649
// squareDigits(3212) ➞ 9414
// Notes
// The function receives an integer and must return an integer.

function squareDigits(n) {
  let arrDigit = n.toString().split("");
//   console.log("🚀 ~ squareDigits ~ arrDigit:", arrDigit);
  let arrSqure = Math.trunc(arrDigit.map((e) => Math.pow(e, 2)).join(""));
  return arrSqure;
}
console.log(squareDigits(9119));
