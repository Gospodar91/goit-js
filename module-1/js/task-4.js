'use strict';
const credits = 23580;
const pricePerDroid = 3000;
const userChoice = prompt("Сколько дроидов надо?");
const totalPrice = pricePerDroid * Number(userChoice);
const balance = credits - totalPrice;
if (userChoice === null) {
    console.log('Отменено пользователем!');
} else if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
} else {
    console.log(`Вы купили ${userChoice} дроидов, на счету осталось ${balance} кредитов.`)
}