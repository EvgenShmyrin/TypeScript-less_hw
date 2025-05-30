// – створити функцію яка повертає найменьше число з масиву

let arr410: number[] = [10, 2, 3, 14, 5]

function maxNumber410(arr: number[]): void {
    let max: number = arr[0];
    for (let number of arr) {
        if (number >= max) {
            max = number;
        }
    }
    console.log(max);
}

maxNumber410(arr410)