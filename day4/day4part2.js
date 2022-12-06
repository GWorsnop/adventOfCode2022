import fs from "fs";

const file = fs
  .readFileSync("day4/input.txt", { encoding: "utf-8" })
  .trim()
  .split("\n");

const pairs = file.map((line) => {
  return line.split(",").map((pair) => {
    return pair.split("-").map((number) => {
      return Number(number);
    });
  });
});

let matchTotal = 0;

function overlapSolver([[firstStart, firstEnd], [secondStart, secondEnd]]) {
  if (firstEnd >= secondStart && firstStart <= secondEnd) {
    matchTotal++;
  }
}

pairs.forEach((pair) => {
  overlapSolver(pair);
});

console.log(matchTotal);
