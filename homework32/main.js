// Задача 1.

let number = Number(prompt("Введите число:"));

if (number % 2 === 0) {
    console.log("Число чётное");
} else {
    console.log("Число нечётное");
}

// Задача 2.


let age = 25;

let discount = age < 18 ? 10 : age <= 65 ? 20 : 30;

console.log(`Вам ${age} лет. Ваша скидка: ${discount}%`);



switch (true) {
    case age < 18:
        discount = 10;
        break;
    case age <= 65:
        discount = 20;
        break;
    default:
        discount = 30;
}

console.log(`Вам ${age} лет. Ваша скидка: ${discount}%`);


// Задача 3.

let username = prompt("Введите имя пользователя:");
let password = prompt("Введите пароль:");

if ((username === "admin" || username === "user") && password === "123456") {
    console.log("Доступ разрешён");
} else {
    console.log("Доступ запрещён");
}

