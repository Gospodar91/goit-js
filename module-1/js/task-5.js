'use strict';
let country = prompt("Введите страну");
let price;
const inLowerCaseCountry = country.toLowerCase();
switch (inLowerCaseCountry) {
    case "китай":
        price = 100;
        console.log(`Доставка в ${inLowerCaseCountry[0].toUpperCase()}${inLowerCaseCountry.substr(1,1000)} будет стоить ${price} кредитов`);
        break;
    case "чили":
        price = 250;
        console.log(`Доставка в ${inLowerCaseCountry[0].toUpperCase()}${inLowerCaseCountry.substr(1,1000)} будет стоить ${price} кредитов`);
break;
    case "австрия":
        price = 170;
        console.log(`Доставка в ${inLowerCaseCountry[0].toUpperCase()}${inLowerCaseCountry.substr(1,1000)} будет стоить ${price} кредитов`);
        break;
    case "индия":
        price = 80;
        console.log(`Доставка в ${inLowerCaseCountry[0].toUpperCase()}${inLowerCaseCountry.substr(1,1000)} будет стоить ${price} кредитов`);
        break;
    case "ямайка":
        price = 120;
        console.log(`Доставка в ${inLowerCaseCountry[0].toUpperCase()}${inLowerCaseCountry.substr(1,1000)} будет стоить ${price} кредитов`);
        break;
    default:
        console.log('В вашей стране доставка не доступна')




}


