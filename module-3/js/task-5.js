"use strict";
const getAllPropValues = function(products, prop) {
  const result = [];
  for (let i = 0; i < products.length; i++) {
    const curElement = products[i];
    result.push(curElement[prop]);
  }
  return result;
};
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];
console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']
console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]
console.log(getAllPropValues(products, "price")); //
