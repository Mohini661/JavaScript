// Create a function that concatenates n input arrays, where n is variable.

// Examples
// concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]

function concat(...args) {
  // return [1, 2, 3].concat([4, 5], [6, 7])
  return args.flat();
}
console.log(concat([1, 2, 3], [4, 5], [6, 7]));
console.log(concat([1], [2], [3], [4], [5], [6], [7]));
console.log(concat([1, 2], [3, 4]));
console.log(concat([4, 4, 4, 4, 4]));
