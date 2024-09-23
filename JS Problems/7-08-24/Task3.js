// Given an array of cities and populations, return an array where all populations are rounded to the nearest million.

// Examples
// millionsRounding([
//   ["Nice", 942208],
//   ["Abu Dhabi", 1482816],
//   ["Naples", 2186853],
//   ["Vatican City", 572]
// ])
// [
//   ["Nice", 1000000],
//   ["Abu Dhabi", 1000000],
//   ["Naples", 2000000],
//   ["Vatican City", 0]
// ]
// Notes
// Round down to 0 if a population is below 500,000.

function millionsRounding(arr) {
  const mapArray = arr.map((e) => {
    return e[1];
  });
  console.log("🚀 ~ mapArray ~ mapArray:", mapArray)  
  return  mapArray.map((e) => {
    if (e < 500000) {
      return 0;
    } else {
      return Math.round(e / 1000000) * 1000000;
    }
  });
}
console.log(
  millionsRounding([
    ["Nice", 942208],
    ["Abu Dhabi", 1482816],
    ["Naples", 2186853],
    ["Vatican City", 572],
  ])
);
