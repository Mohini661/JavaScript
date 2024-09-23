// Create a function that takes the order of the matrix as input and returns the number of rectangles in them.

// Examples
// rectangles(1) ➞ 1
// rectangles(2) ➞ 9
// rectangles(3) ➞ 36

// Notes
// The input will always be an integer.
// Number of rectangles are given by: ((n(n+1))/2)^2

function rectangles(step) {
  const result = (step * (step + 1)) / 2;
  return (numOfRectangles = Math.pow(result, 2));
}
console.log(rectangles(1));
console.log(rectangles(2));
console.log(rectangles(3));

