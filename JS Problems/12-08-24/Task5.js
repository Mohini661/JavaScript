// Write a function that takes a string input and returns the string in a reversed case and order.

// Examples
// invert("dLROW YM sI HsEt") ➞ "TeSh iS my worlD"
// invert("ytInIUgAsnOc") ➞ "CoNSaGuiNiTY"
// invert("step on NO PETS") ➞ "step on NO PETS"
// invert("XeLPMoC YTiReTXeD") ➞ "dExtErIty cOmplEx"

// Notes
// No empty strings and will neither contain special characters nor punctuation.
// A recursive version of this challenge can be found via this link.

function invert(s) {
  let str = s.split("").reverse();
  // console.log("🚀 ~ invert ~ str:", str) 
  const result = str.map((e) => {
    if (e.charCodeAt() >= 97 && e.charCodeAt() <= 122) {
      return String.fromCharCode(e.charCodeAt() - 32);
    } else if (e.charCodeAt() >= 65 && e.charCodeAt() <= 90) {
      return String.fromCharCode(e.charCodeAt() + 32);
    }
  });
  console.log("🚀 ~ result ~ result:", result)
  return result.join("")
}
// console.log(invert("dLROW YM sI HsEt"));
// console.log(invert("ytInIUgAsnOc"));
// console.log(invert("step on NO PETS"));
// console.log(invert("XeLPMoC YTiReTXeD"));

const invertStr = (str) => {
  let a = str.split("")
  let b = a.map((item) => {

    if (item.charCodeAt() >= 97 && item.charCodeAt() <= 122) {
      return String.fromCharCode(item.charCodeAt() - 32);
    } else if (item.charCodeAt() >= 65 && item.charCodeAt() <= 90) {
      return String.fromCharCode(item.charCodeAt() + 32);
    } else if(item ===" "){
      return " "
    }

  }).reverse();
  return b.join("");
}

console.log(invertStr("dLROW YM sI HsEt"))