// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

// Examples
// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]
// numInStr(["abc", "abc10"]) ➞ ["abc10"]
// numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]
// numInStr(["this is a test", "test1"]) ➞ ["test1"]

function numInStr(arr) {
  num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let filtered_arr = [];
  arr.forEach((element) => {
    for (let i = 0; i < element.length; i++) {
      if (num.includes(parseInt(element[i]))) {
        filtered_arr.push(element);
        break;
      }
    }
    // console.log("🚀 ~ numInStr ~ element:", element)
  });

  console.log("🚀 ~ filtered_arr ~ filtered_arr:", filtered_arr);
}
numInStr(["1a", "a", "2b", "b"]);
numInStr(["abc", "ab10c", "a10bc", "bcd"]);
numInStr(["abc", "ab10c", "a10bc", "bcd"]);
numInStr(["this is a test", "test1"]);
