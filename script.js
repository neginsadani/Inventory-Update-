"use strict";
const inventory = ["mouse", "keyboard", "monitor", "laptop", "printer"];
const searchTerm = "laptop";

if (inventory.includes(searchTerm)) {
  const index = inventory.indexOf(searchTerm);
  inventory.splice(index, 1);
  inventory.push(searchTerm);
} else {
  inventory.push(searchTerm);
}

const newArray = inventory.slice(0, 3).concat(inventory.slice(-2));

const resultString = newArray.join(";");

console.log(resultString);
