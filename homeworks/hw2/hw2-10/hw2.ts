// Користувач вводить або має два числа.
//
//     Потрібно знайти та вивести максимальне число з тих двох .
//
//     Також потрібно врахувати, коли введені рівні числа.

// let number1=prompt('Введіть перше число')
// let number2=prompt('Введіть друге число')

let number1: number = 10
let number2: number = 10

if (number1 > number2) {
    console.log('Перше число більше ніж друге')
} else if (number1 < number2) {
    console.log('Друге число більше ніж друге')
} else {
    console.log('Обидва числа рівні')
}