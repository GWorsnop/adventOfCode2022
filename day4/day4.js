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

console.log(pairs);

let matchTotal = 0;

function overlapSolver([[firstStart, firstEnd], [secondStart, secondEnd]]) {
  if (firstStart >= secondStart && firstEnd <= secondEnd) {
    console.log("match1 >>>", [firstStart, firstEnd], [secondStart, secondEnd]);
    matchTotal++;
  } else if (secondStart >= firstStart && secondEnd <= firstEnd) {
    console.log("match2 >>>", [secondStart, secondEnd], [firstStart, firstEnd]);
    matchTotal++;
  }
}

pairs.forEach((pair) => {
  overlapSolver(pair);
});

console.log(matchTotal);
