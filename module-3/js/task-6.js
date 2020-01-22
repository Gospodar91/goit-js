"use strict";
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];
const calculateTotalPrice = function(allProdcuts, productName) {
  let rezult;
  for (let i = 0; i < products.length; i++) {
    if (productName === products[i].name) {
      let temp = products[i].price * products[i].quantity;
      rezult = temp;
    }
  }
  return rezult;
};
console.log(calculateTotalPrice(products, "Радар")); // 5200
console.log(calculateTotalPrice(products, "Дроид")); // 2800
console.log(calculateTotalPrice(products, "Сканер"));
console.log(calculateTotalPrice(products, "Захват"));

// let result=products.price[0]*products* quantity[0];
// отсортировать массив по продукт нейм и сделать строгое сравнение с ключом кей если тру-перемножаем,фолс-перебираем
