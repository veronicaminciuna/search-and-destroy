"use strict";

// Complete this algo
const minJumps = (arr) => {
  let counter = 0;
  let index = 0;
  if (index < arr.length - 1) {
    let maxJumps = arr[index];

    let numberofJumps = arr.slice(index, maxJumps);
    counter++;
    console.log(numberofJumps);
  }
};

module.exports = minJumps;
