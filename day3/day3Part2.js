import fs from "fs";

const file = fs
  .readFileSync("day3/input.txt", { encoding: "utf-8" })
  .trim()
  .split("\n");

const halved = file.map((item) => {
  const split = [item.slice(0, item.length / 2), item.slice(item.length / 2)];
  return split;
});

const chunkSize = 3;
const triples = [];
for (let i = 0; i < file.length; i += chunkSize) {
  const chunk = file.slice(i, i + chunkSize);
  triples.push(chunk);
}

// this time I split the array into groups of 3 rather than splitting each one in two

function matcher(arr, i) {
  let count = 0;
  for (let i = 0; i < arr[0].length; i++) {
    if (arr[1].includes(arr[0][i]) & arr[2].includes(arr[0][i])) {
      count = count + converter(arr[0][i]);
      console.log(arr[0][i]);
      return count;
    }
  }
}

// same as last time but with an &&

let total = 0;

triples.forEach((triple) => {
  console.log(triple);
  matcher(triple);
  total = total + matcher(triple);
});

console.log(total);

function converter(letter) {
  if (letter.charCodeAt(0) > 96) {
    return letter.charCodeAt(0) - 96;
  } else {
    return letter.charCodeAt(0) - 38;
  }
}
