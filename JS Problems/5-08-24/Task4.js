// Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.

// Examples
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]

function keysAndValues(obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  return keys.concat(values);
//   return Object.keys(obj).concat(Object.values(obj)) //also true
}
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
