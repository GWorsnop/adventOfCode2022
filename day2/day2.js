const fs = require("fs");

const file = fs
  .readFileSync("day2/input.txt", { encoding: "utf-8" })
  .trim()
  .split("\n");

const score = { AX: 4, AY: 8, AZ: 3, BX: 1, BY: 5, BZ: 9, CX: 7, CY: 2, CZ: 6 };

// create an object that has the scores pre-determined by me to use later.

const guide = file.map((item) => {
  const noSpaces = item.split(" ").join("");
  return noSpaces;
});

// remove spaces from the file so that it can be written easily as object key.

let totalScore = 0;

function calculateScore() {
  guide.forEach((item, i) => {
    totalScore = totalScore + score[guide[i]];
  });
  return totalScore;
}

// had some issues with scope, so quick fix was to define a function and invoke it
// probably not the best way to do this, but it did mean that I could access the variable I wanted

console.log(calculateScore());

const newScore = {
  AX: 3,
  AY: 4,
  AZ: 8,
  BX: 1,
  BY: 5,
  BZ: 9,
  CX: 2,
  CY: 6,
  CZ: 7,
};

// did this with my own logic rather that writing a program to do it
// maybe not in the spirit of the advent of code???

let newTotalScore = 0;

function calculateNewScore() {
  guide.forEach((item, i) => {
    newTotalScore = newTotalScore + newScore[guide[i]];
  });
  return newTotalScore;
}

console.log(calculateNewScore());

// I would say that I should have probably coded the solution to the key value pairs rather than hard coding them
// There would obviously be some switch / if statements to include to solve it
// Is the task more about problem solving or coding skill?
