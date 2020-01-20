'use strict';
let input;
const numbers = [];
let total = 0;
while (input !== null) {
  input = prompt("Введите число");
  if (Number.isNaN(Number(input))) {
    alert("Было введено не число,попробуйте еще раз")
  } else {
    numbers.push(input);
  }
}
for (let i = 0; i < numbers.length; i++) {
  total += Number(numbers[i])
}
alert(`Общая сумма чисел равна ${total}`);