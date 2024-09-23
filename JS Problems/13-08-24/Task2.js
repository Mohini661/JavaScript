// An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.

// Examples
// isPositiveDominant([1, 1, 1, 1, -3, -4]) ➞ false
// // There is only 1 unique positive value (1).
// // There are 2 unique negative values (-3, -4).
// isPositiveDominant([5, 99, 832, -3, -4]) ➞ true
// isPositiveDominant([5, 0]) ➞ true
// isPositiveDominant([0, -4, -1]) ➞ false

// Notes
// 0 counts as neither a positive nor a negative value.

function isPositiveDominant(a) {
  let unique = [];
  for (element of a) {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  }
  // console.log("🚀 ~ isPositiveDominant ~ unique:", unique);
  const positiveNum = unique.filter((e, i) => {
    if (e > 0) {
      return e;
    }
  });
  const nagetiveNum = unique.filter((e) => {
    if (e < 0) {
      return e;
    }
  });
  return positiveNum.length > nagetiveNum.length;
}
console.log(isPositiveDominant([1, 1, 1, 1, -3, -4]));
console.log(isPositiveDominant([5, 99, 832, -3, -4]));
console.log(isPositiveDominant([5, 0]));
console.log(isPositiveDominant([0, -4, -1]));
