// This Triangular Number Sequence is generated from a pattern of dots that form a triangle. 
// The first 5 numbers of the sequence, or dots, are: 1, 3, 6, 10, 15

// Write a function that returns the number of dots when given its corresponding triangle number of the sequence.

//Examples
// triangle(1) ➞ 1
// triangle(6) ➞ 21
// triangle(215) ➞ 23220

// n = (n*(n+1))/2

function triangle(n) {
	return (n*(n+1))/2
}
console.log(triangle(1));
console.log(triangle(6));
console.log(triangle(215));