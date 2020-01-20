'use strict';
const country = prompt("Введите страну");
let price;
const inLowerCaseCountry = country.toLowerCase();
switch (inLowerCaseCountry) {
    case "китай":
        price = 100;
        break;
    case "чили":
        price = 250;
        break;
    case "австрия":
        price = 170;
        break;
    case "индия":
        price = 80;
        break;
    case "ямайка":
        price = 120;
        break;
    default:
        alert('В вашей стране доставка не доступна');
}
alert(`Доставка в ${inLowerCaseCountry[0].toUpperCase()}${inLowerCaseCountry.substr(1,1000)} будет стоить ${price} кредитов`);