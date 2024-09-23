// Create a function that returns the thickness (in meters) of a piece of paper after folding it n number of times. The paper starts off with a thickness of 0.5mm.

// Examples
// numLayers(1) ➞ "0.001m"
// // Paper folded once is 1mm (equal to 0.001m)
// numLayers(4) ➞ "0.008m"
// // Paper folded 4 times is 8mm (equal to 0.008m)
// numLayers(21) ➞ "1048.576m"
// // Paper folded 21 times is 1048576mm (equal to 1048.576m)

// Notes
// There are 1000mm in a single meter.
function numLayers(n) {
  let startVal = 0.0005;
  result = startVal * Math.pow(2, n);
  return `Paper folded ${n} times  is ${result}m`;
}
console.log(numLayers(1));
console.log(numLayers(4));
console.log(numLayers(21));

