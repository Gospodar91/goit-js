"use strict";
class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(product) {
    this.items.push(product);
  }
  removeItem(product) {
    if (this.items.includes(product)) {
      // определяем есть ли такая строка,что к нам пришла в КОНКРЕТНОМ массиве
      //  const temp=this.items.indexOf(product); // Получаем индекс элемента в НАШЕМ массиве,если он есть
      this.items.splice(this.items.indexOf(product), 1); //Выпиливаем элемент
    } else {
      return this.items;
    }
  }
}
const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор"
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
