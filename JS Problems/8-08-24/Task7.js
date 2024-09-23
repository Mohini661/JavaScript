// Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.

// Examples
// numbersSum([1, 2, "13", "4", "645"]) ➞ 3
// numbersSum([true, false, "123", "75"]) ➞ 0
// numbersSum([1, 2, 3, 4, 5, true]) ➞ 15

function numbersSum(arr) {
  const filterArr = arr
    .filter((e) => {
      if (typeof e === "number") {
        return e;
      }
    })
    .reduce((lrv, e) => lrv + e,0);
  //   return filterArr.reduce((lrv, e) => lrv + e);
  return filterArr;
}
console.log(numbersSum([1, 2, "13", "4", "645"]));
console.log(numbersSum([true, false, "123", "75"]));
console.log(numbersSum([1, 2, 3, 4, 5, true]));
