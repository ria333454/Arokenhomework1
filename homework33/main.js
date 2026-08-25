// Задача 1

for (let i = 1; i <= 20; i++) {
    if (i % 4 === 0) {
        continue;
    }
    console.log(i);
}

// Задача 2


let n = Number(prompt("Введите число:"));
let number = 1;

for (let i = 1; i <= n; i++) {
    number *= i;
}

console.log("Факториал:", number);


// Задача 3


let board = "";

for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        if ((row + col) % 2 === 0) {
            board += "#";
        } else {
            board += " ";
        }
    }

    board += "\n";
}

console.log(board);