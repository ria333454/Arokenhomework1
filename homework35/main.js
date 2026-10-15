// Задача 1

const person = {
    name: "Рианна",
    hobby: "Валяться",
    favoriteDrink: "Кока кола",
    Status: "Студент",
    Work: "I hate part time jobs."
}

for (const keys in person) {
console.log(`${keys}:`, person[keys])
}

// Задача 2

const obj = {};

function isEmpty(obj) {
    if (Object.keys(obj).length === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEmpty(obj));

// Задача 3

const task = {
    title: "Учёба",
    description: "Сделать уроки",
    isCompleted: false
};

function cloneAndModify(object, modifications) {
    const copy = { ...object, ...modifications };
    return copy;
}

const newTask = cloneAndModify(task, {
    title: "Математика"
});

for (let key in newTask) {
    console.log(key, newTask[key]);
}

// Задача 4

const callAllMethods = (obj) => {
    for (const key in obj) {
        if (typeof obj[key] === 'function') {
            obj[key]();
        }
    }
};

const myobject = {
    method1() {
        console.log('Метод 1 вызван');
    },

    method2() {
        console.log('Метод 2 вызван');
    },

    property: 'Это не метод'
};

callAllMethods(myobject);