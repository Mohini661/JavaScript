// Create a function which returns the number of true values there are in an array.

// Examples
// countTrue([true, false, false, true, false]) ➞ 2
// countTrue([false, false, false, false]) ➞ 0
// countTrue([]) ➞ 0

// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

function countTrue(arr) {
  let count = arr.filter((e) => e === true);
  return count.length;
}
console.log(countTrue([true, false, false, true, false])); // 2
console.log(countTrue([false, false, false, false])); // 0
console.log(countTrue([])); //0
