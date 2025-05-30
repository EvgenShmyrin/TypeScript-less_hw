// –створити масив з:
// – з 5 числових значень
// – з 5 стічкових значень
// – з 5 значень стрічкового, числового та булевого типу
// – та вивести його в консоль

let array1: number[] = [10, -15, 45, 500, -13]
let array2: string[] = ['anna', 'kay', 'car', 'pen', 'water']
let array3: any[] = [false, -15, 'cat', true, 199]

// console.log(array1 + ',' + array2 + ',' + array3)

console.log(`${array1}, ${array2}, ${array3} `);

// — Створити пустий масив. Наповнити його будь-якими значеннями, звертаючись до конкретного індексу.
// Вивести в консоль
//
let array: any[] = []

array[0] = 'cat';
array[1] = 10;
array[2] = false;
array[3] = 'car';

console.log(array)