// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
let arr36: any = []
let i36: number = 0;
let a36: number = 2;
while (i36 < 50) {
    arr36[i36] = a36;
    a36 += 2;
    i36++
}
console.log(arr36)
// b. заповнити його 50 непарними числами за допомоги циклу.
let arr37: any = []
let i38: number = 0;
let a39: number = 1;
while (i38 < 50) {
    arr37[i38] = a39;
    a39 += 2;
    i38++
}
console.log(arr37)
// c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)
let arr361: any = []
let i361: number = 0;
while (i361 < 20) {
    arr361[i361] = Math.round(Math.random() * 10);
    i361++
}
console.log(arr361)

// d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)

let min36: number = 8;
let max36: number = 732;
let arr3611: any = []
for (let i: number = 0; i < 20; i++) {
    arr3611[i] = Math.floor(Math.random() * (max36 - min36 + 1)) + min36;
}
console.log(arr3611)

// 2. Вивести за допомогою console.log кожен третій елемент

let min361: number = 8;
let max361: number = 732;
let arr36111: any = []
for (let i: number = 0; i < 20; i++) {
    arr36111[i] = Math.floor(Math.random() * (max361 - min361 + 1)) + min361;
}
console.log(arr36111)
let j36: number = 0;
while (j36 < arr36111.length) {
    if (j36 % 3 === 0) {
        console.log(arr36111[j36])
    }
    j36 += 3;
}

// 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.

let min362: number = 8;
let max362: number = 732;
let arr362: any = []
for (let i: number = 0; i < 20; i++) {
    arr362[i] = Math.floor(Math.random() * (max362 - min362 + 1)) + min362;
}
console.log(arr362)
let j362: number = 0;
while (j362 < arr362.length) {
    if (j362 % 3 === 0) {
        if (arr362[j362] % 2 === 0) {
            console.log(arr362[j362])
        }
    }
    j362 += 3;
}

// 4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив
let min363: number = 8;
let max363: number = 732;
let arr363: any = []
for (let i: any = 0; i < 20; i++) {
    arr363[i] = Math.floor(Math.random() * (max363 - min363 + 1)) + min363;
}
console.log(arr363)
let new_arr362: any = [];
let j363: number = 0;
while (j363 < arr363.length) {
    if (j363 % 3 === 0) {
        if (arr363[j363] % 2 === 0) {
            new_arr362[j363] = arr363[j363];
        }
    }
    j363 += 3;
}
console.log(new_arr362)
// Не знаю як прибрати пробіли
//
// 5. Вивести кожен елемент масиву, сусід справа якого є парним

let min364: number = 8;
let max364: number = 732;
let arr364: any = []
for (let i: number = 0; i < 20; i++) {
    arr364[i] = Math.floor(Math.random() * (max364 - min364 + 1)) + min364;
}
console.log(arr364)
let j364: number = 0;
while (j364 < arr364.length) {
    if (arr364[j364 + 1] % 2 === 0) {
        console.log(arr364[j364]);
    }
    j364++;
}

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let arr365: any = [100, 250, 50, 168, 120, 345, 188];
let i365: number = 0;
let sum_number: number = 0
while (i365 < arr365.length) {
    sum_number = sum_number + arr365[i365];
    i365++;
    var check: any = Math.round(sum_number / arr365.length);
}
console.log(`Середній чек дорінює - ${check}$`);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let min366: number = 8;
let max366: number = 732;
let arr366: any = []
let new_arr: any = []
for (let i: number = 0; i < 20; i++) {
    arr366[i] = Math.floor(Math.random() * (max366 - min366 + 1)) + min366;
}
console.log(arr366)
let j = 0;
while (j < arr366.length) {
    new_arr[j] = arr366[j] * 5;
    j++;
}
console.log(new_arr)


// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.

let array367: any = [1, 3, 'two', 'three', 'four', 'five', true, false, 10, 500];
let i367: number = 0;
let new_array: any = [];
while (i367 < array367.length) {
    if (typeof (array367[i367]) === 'number') {
        new_array[i367] = array367[i367];
    }
    i367++
}
console.log(new_array);



