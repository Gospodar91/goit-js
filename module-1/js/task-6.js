'use strict';
let input;
let total = 0;
while(input!==null){
    input=prompt("Введите число");
    let temp=Number(input);
    total=total+temp;
  }
console.log(total);