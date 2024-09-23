// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

// Examples
// oddishOrEvenish(43) ➞ "Oddish"
// 4 + 3 = 7
// 7 % 2 = 1
// oddishOrEvenish(373) ➞ "Oddish"
// 3 + 7 + 3 = 13
// 13 % 2 = 1

// oddishOrEvenish(4433) ➞ "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0

function oddishOrEvenish(num) {
  let strNum = num.toString().split("");
  const numArr = strNum.map((e) => +e);
  const sumOfArr = numArr.reduce((lrv, e) => +(lrv + e));
  if (sumOfArr % 2 === 0) {
    return "Evenish";
  } else {
    return "Oddish";
  }
}
console.log(oddishOrEvenish(43));
console.log(oddishOrEvenish(373));
console.log(oddishOrEvenish(4433));
