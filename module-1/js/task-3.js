'use strict';
const ADMIN_PASSWORD = 'jqueryismyjam';
let message_3;
message_3 = prompt("Введите пароль");
if (message_3 === ADMIN_PASSWORD) {
    console.log("'Добро пожаловать!'");
} else if (message_3 == null) {
    console.log("'Отменено пользователем!'")

} else {
    console.log("'Доступ запрещен, неверный пароль!'")
}
alert(message_3);