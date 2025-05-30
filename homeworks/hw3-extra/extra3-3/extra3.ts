// – Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let array334: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i: number = 0; i < 10; i++) {
    console.log(array334[i]);
}

// – Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.

let array335: string[] = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
for (let i: number = 0; i < 10; i++) {
    console.log(array335[i]);
}

// – Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let array336: any[] = [1, {'age': 11, 'number': 12}, 3, 'two', 'three', 'four', 'five', true, false, 10];
for (let i: number = 0; i < 10; i++) {
    console.log(array336[i]);
}

// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let array337: any[] = [1, 3, 'two', 'three', 'four', 'five', true, false, 10, 500];
for (let i: number = 0; i < 10; i++) {
    if (typeof (array337[i]) === 'boolean') {
        console.log(array337[i]);
    }
}

// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let array338: any[] = [1, 3, 'two', 'three', 'four', 'five', true, false, 10, 500];
for (let i: number = 0; i < 10; i++) {
    if (typeof (array338[i]) === 'number') {
        console.log(array338[i]);
    }
}

// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let array339 = [1, 3, 'two', 'three', 'four', 'five', true, false, 10, 500];
for (let i: number = 0; i < 10; i++) {
    if (typeof (array339[i]) === 'string') {
        console.log(array339[i]);
    }
}

