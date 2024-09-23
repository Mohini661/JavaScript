// how to find the missing number in a given integer array of 1 to 10
const givenArray = [1, 3, 5, 7, 10];

console.log(givenArray.indexOf(2));

const missingValue = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const m = [];
  for (let i = min; i < max; i++) {
    if (arr.indexOf(i) < 0) {
      m.push(i);
    }
  }
  return m;
};
console.log(missingValue(givenArray));
