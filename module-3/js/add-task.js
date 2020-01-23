'use strict'
//Есть ввод данных от пользователя.Пользователь вводит курс валют на текущий момент.По умолчанию курс=25.
//Есть массив обьектов со свойствами продукт-цена.При отклонении введенного курса более чем на 5%,товары чья стоимость больше 1000  
// пересчитываються,а сам обьект клонируеться в новый массив.На выходе имеем 2 массива с обьектами-с измененными(где необходимо)\
//старыми ценами и новый массив  только c измененной ценой



const products = [
    { name: "Радар", price: 1300 },
    { name: "Сканер", price: 2700},
    { name: "Дроид", price: 400},
    { name: "Захват", price: 1200 }
  ];

const deafaultCurrency=25;
let newCurrency;
let input=prompt('Введите курс');
if (Number.isNaN(Number(input))) {
    alert("Было введено не число,попробуйте еще раз");}
   else {
 newCurrency=Number(input);
   }
   if(newCurrency> deafaultCurrency){
    const keys = Object.keys(products);
    for (const key of keys) {
        console.log(`${key}: ${products[key]}`);
     
    }
   

    
   }








