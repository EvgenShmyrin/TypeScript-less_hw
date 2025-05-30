// – Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let arr38: number[] = [1, 3, 159, 56, 99, 11, 44, 10, 500, -3];
for (let number of arr38) {
    if (number % 2 === 0) {
        console.log(number);
    }
}
// – Взяти масив з 10 чисел або створити його. Створити 2-й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let arr381: number[] = [1, 3, 159, 56, 99, 11, 44, 10, 500, -3];
let new_arr381: number[] = []
for (let number of arr381) {
    new_arr381.push(number);
}
console.log(new_arr381);

// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.
let arr3821: string[] = ['a', 'b', 'c'];
let new_arr3821: string[] = []
for (let string of arr3821) {
    new_arr3821.push(string);
}
console.log(`${new_arr3821[0]}${new_arr3821[1]}${new_arr3821[2]}`);

// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.
let arr383: string[] = ['a', 'b', 'c'];
let new_arr383: string[] = []
let i383: number = 0;
while (i383 < arr383.length) {
    let string:string = arr383[i383];
    new_arr383.push(string);
    i383++
}
console.log(`${new_arr383[0]}${new_arr383[1]}${new_arr383[2]}`);