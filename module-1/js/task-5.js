'use strict';
let country = prompt("Введите страну");
let price;
const inLowerCaseCountry = country.toLowerCase();
let message;
switch (inLowerCaseCountry) {
    case "китай":
        price = 100;
        message = `Доставка в ${inLowerCaseCountry[0].toUpperCase()}${inLowerCaseCountry.substr(1,1000)} будет стоить ${price} кредитов`;
        alert(message);
        break;
    case "чили":
        price = 250;
        message = `Доставка в ${inLowerCaseCountry[0].toUpperCase()}${inLowerCaseCountry.substr(1,1000)} будет стоить ${price} кредитов`;
        alert(message);
        break;
    case "австрия":
        price = 170;
        message = `Доставка в ${inLowerCaseCountry[0].toUpperCase()}${inLowerCaseCountry.substr(1,1000)} будет стоить ${price} кредитов`;
        alert(message);
        break;
    case "индия":
        price = 80;
        message = `Доставка в ${inLowerCaseCountry[0].toUpperCase()}${inLowerCaseCountry.substr(1,1000)} будет стоить ${price} кредитов`;
        alert(message);
        break;
    case "ямайка":
        price = 120;
        message = `Доставка в ${inLowerCaseCountry[0].toUpperCase()}${inLowerCaseCountry.substr(1,1000)} будет стоить ${price} кредитов`;
        alert(message);
        break;
    default:
        alert('В вашей стране доставка не доступна');
}