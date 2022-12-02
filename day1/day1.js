const fs = require("fs");

const file = fs
  .readFileSync("day1/input.txt", { encoding: "utf-8" })
  .trim()
  .split("\n\n");

// reads the file and groups them into elves
// splits at double line break due to grouping of food items

console.log(file);

const calories = file.map((elf) => {
  const total = elf.split("\n").map(Number);
  return total.reduce((prev, curr) => prev + curr, 0);
});

// this collects the elf items and converts them from NUMBER\nNUMBER into sum of ints

console.log(calories, "<<<< calories");

const largest = Math.max(...calories);

// uses Math.max to find the largest item in the array

console.log(largest, "Solution to part 1");

// now need to work out the total of the top 3 largest, not just the largest

const topThreeArr = [];

for (let i = 0; i < 3; i++) {
  topThreeArr.push(Math.max(...calories));
  const index = calories.indexOf(Math.max(...calories));
  calories.splice(index, 1);
}

console.log(topThreeArr);

// found top 3, now need to add them together

const finalSum = topThreeArr.reduce((prev, curr) => prev + curr, 0);

console.log(finalSum);

// Mutated the input values in order to solve this.  Probably not ideal but didn't require it further on.
// Could have created a copy of the array instead to avoid mutation.
