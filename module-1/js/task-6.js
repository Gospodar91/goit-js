'use strict';
let input = prompt("Введите число");
let total = 0;
while (input !== null) {
  if (isNaN(input)) {
    alert("Было введено не число,попробуйте еще раз");
    input = prompt("Введите число");
    continue;
  } else {
    total = total + Number(input);
  }
  input = prompt("Введите число");
}
alert(`Общая сумма чисел равна ${total}`);