'use strict';
let input = prompt("Введите число");
let total = 0;
while (input !== null) {
  input = prompt("Введите число");
  if (Number.isNaN(Number(input))) {
    console.log("Incorrect")
  } else {
    total = total + Number(input);
  }
}
console.log(total);