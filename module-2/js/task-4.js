'use strict';
const formatString = function (string) {
    string = string.split('')
    if (string.length >= 40) {
        string = string.splice(0, 40);
        string = string.join(''); // обьеденяет массив ,заменяя запятые на пробел 
        return string + "...";
    } else {
        string = string.join(''); // обьеденяет массив ,заменяя запятые на пробел 
        return string;
    }
};
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));