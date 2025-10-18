let firstName = 'Рианна'
let age = '17'
let goal = 'Стать фронтенд-разработчиком'
let learningNow = 'JavaScript'
let hobby = 'Лениться'

console.log(firstName, age, goal, learningNow, hobby)

// _______________________________________________________

const greeter = {
    sayHello(name) {
        return `Hello "${name}"`;
    }
};

console.log(greeter.sayHello('Alex'));

// _________________________________________

const users = [
    {
        name: "Alex", isAdmin: false
    },

    {
        name: "John", isAdmin: true
    },

    {
        name: "Anna", isAdmin: false
    },

    {
        name: "Max", isAdmin: false
    }
]

let regularUsersCount = 0

for (let i = 0; i < users.length; i++) {
    if (!users[i].isAdmin) {
        regularUsersCount++;
    }
}

console.log("Количество простых пользователей:", regularUsersCount)

