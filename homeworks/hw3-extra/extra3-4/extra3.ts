// – Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

let arr343: any[] = []
arr343[0] = 0;
arr343[1] = 100;
arr343[2] = false;
arr343[3] = '';
arr343[4] = NaN;
arr343[5] = {};
arr343[6] = [];
arr343[7] = 'string';
arr343[8] = undefined;
arr343[9] = null;

for (let arrElement of arr343) {
    console.log(arrElement);
}

// – Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i: number = 0; i < 10; i++) {
//     console.log(i);
//     document.write(i)
// }
//
// // – Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i:number = 0; i < 100; i++) {
//     console.log(i);
//     document.write(i)
// }
//
// // – Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//
// for (let i:number = 0; i < 100; i += 2) {
//     console.log(i);
//     document.write(i)
// }
//
// // – Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//
// for (let i:number = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//         document.write(i)
//     }
// }
//
// // – Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
// for (let i:number = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//         document.write(i)
//     }
// }
