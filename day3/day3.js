import fs from "fs";

const file = fs
  .readFileSync("day3/input.txt", { encoding: "utf-8" })
  .trim()
  .split("\n");

const halved = file.map((item) => {
  const split = [item.slice(0, item.length / 2), item.slice(item.length / 2)];
  return split;
});

// split the strings into halves for each compartment

function matcher(arr, i) {
  let count = 0;
  for (let i = 0; i < arr[0].length; i++) {
    if (arr[1].includes(arr[0][i])) {
      count = count + converter(arr[0][i]);
      return count;
    }
  }
}

// finds matches in the second half using the first string, iterating through each time
// the letter is then found and ran into the converter
// this is then added to the count and provides the final total

function converter(letter) {
  if (letter.charCodeAt(0) > 96) {
    return letter.charCodeAt(0) - 96;
  } else {
    return letter.charCodeAt(0) - 38;
  }
}

// this converter provides the score for each letter depending on charCode

let total = 0;

halved.forEach((item, i) => {
  total = total + matcher(item, i);
});

console.log(total);

//adds up the total from iterating through each split array
