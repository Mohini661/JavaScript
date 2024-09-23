// Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game.

// Examples
// towerHanoi(3) ➞ 7
// towerHanoi(5) ➞ 31
// towerHanoi(0) ➞ 0
// Notes
// The amount of discs is always a positive integer.
// 1 disc can be changed per move.

function towerHanoi(discs) {
  return Math.pow(2, discs) - 1;
}
console.log(towerHanoi(3));
console.log(towerHanoi(5));
console.log(towerHanoi(0));
