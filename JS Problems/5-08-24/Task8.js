// Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".

// Examples
// sortIt([4, 1, 3]) ➞ [1, 3, 4]
// sortIt([[4], [1], [3]]) ➞ [[1], [3], [4]]


function sortIt(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(sortIt([4, 1, 3]));
console.log(sortIt([[4], [1], [3]]));
console.log(sortIt([4, [1], 3]));
console.log(sortIt([[4], 1, [3]]));
console.log(sortIt([[4], 1, [3]]));

