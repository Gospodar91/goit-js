'use strict';
let input= prompt("Введите число");
const numbers = [];
let total = 0;
while (input !== null) {
  if (isNaN(input)) {
    alert("Было введено не число,попробуйте еще раз")
    input = prompt("Введите число");
    continue;
  } else {
    numbers.push(input);
  }
  input = prompt("Введите число");
}


for (let i = 0; i < numbers.length; i++) {
  total += Number(numbers[i])
}
alert(`Общая сумма чисел равна ${total}`);

