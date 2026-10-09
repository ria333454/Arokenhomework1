// Задача 1

function calculateFinalPrice(basePrice, discountPercent, taxRate) {
    const discount = basePrice * (discountPercent / 100);
    const priceAfterDiscount = basePrice - discount;
    const tax = priceAfterDiscount * taxRate;

    return priceAfterDiscount + tax;
}

console.log(calculateFinalPrice(100, 10, 0.2)); 
console.log(calculateFinalPrice(100, 10, 0));

// Задача 2

function checkAccess(username, password) {
    if (username === "admin" && password === "123456") {
        return "Доступ разрешён";
    } else {
        return "Доступ запрещён";
    }
}

console.log(checkAccess("admin", "123456"));
console.log(checkAccess("User", "000111"));


// Задача 3

function getTimeOfDay(hour) {
    if (hour < 0 || hour > 23) {
        return "Некорректное время";
    } else if (hour < 5) {
        return "ночь";
    } else if (hour < 11) {
        return "утро";
    } else if (hour < 17) {
        return "день";
    } else {
        return "вечер";
    }
}

console.log(getTimeOfDay(3));
console.log(getTimeOfDay(8));
console.log(getTimeOfDay(15));
console.log(getTimeOfDay(20));
console.log(getTimeOfDay(25));

//  Задача 4

function findFirstEven(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            return i;
        }
    }

    return "Чётных чисел нет";
}

console.log(findFirstEven(3, 10));
console.log(findFirstEven(5, 9));  
console.log(findFirstEven(1, 1));  