// #I2XsG6f
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б

let calcS4: any = (a: number, b: number): number => a * b;
console.log(calcS4(10, 5));

// / #ETGAxbEn8l
// – створити функцію, яка обчислює та повертає площу кола з радіусом r

let cycleS41: any = (r: number): number => 3.14 * r * r;
console.log(cycleS41(10));

// #Mbiz5K4yFe7
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

function cylinderS42(r: number, h: number): number {
    return 3.14 * r * r * h;
}

let S4 = cylinderS42(5, 10);
console.log(S4);

let cylinder: any = (r: number, h: number): number => 3.14 * r * r * h;
console.log(cylinder(10, 20));

// #SIdMd0hQ
// – створити функцію, яка приймає масив та виводить кожен його елемент

let array51: string[] = ["яблоко", "банан", "вишня", "груша", "апельсин"]
let arr51: any = (arrayName: number): void => console.log(arrayName);
arr51(array51);

// #59g0IsA
// – створити функцію, яка створює параграф з текстом. Текст задати через аргумент

let textName51: any = (text: string): void => document.write(`<div><p>${text}</p></div>`);
textName51('Hello World!');

// #hOL6126
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let textName52: any = (text: string): void => document.write(`<div><ul><li>${text}</li><li>${text}</li><li>${text}</li></ul></div>`);
textName52('Hello World!');

// #0Kxco1edSN
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let textName53: any = (text: string, lap: number): void => {
    document.write(`<div><ul>`);
    for (let i = 0; i < lap; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul></div>`);
}
textName53('Hello World!', 5);

// #gEFoxMMO
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arr53: any[] = [true, "банан", 71, "груша", "Всім привіт"]
let nameArr53: any = (name: any): void => {
    document.write(`<div><ul>`);
    for (let element of name) {
        document.write(`<li>${element}</li>`);
    }
    document.write(`</ul></div>`);
}
nameArr53(arr53);

// #bovDJDTIjt
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.
type Users5Type = {
    id: number,
    name: string,
    age: number
}
let users53: Users5Type[] = [
    {id: 1, name: "Олена", age: 25},
    {id: 2, name: "Андрій", age: 30},
    {id: 3, name: "Ірина", age: 22},
    {id: 4, name: "Максим", age: 27},
    {id: 5, name: "Софія", age: 24}
]

let nameFunction53: any = (users: Users5Type[]): void => {
    document.write(`<div>`)
    for (let user of users) {
        document.write(`<div><p>${user.id} ${user.name} ${user.age}</p></div>`)
    }
    document.write(`</div>`)
}
nameFunction53(users53);

//     #pghbnSB
// – створити функцію, яка повертає найменше число з масиву

let arr54: number[] = [10, 2, 3, 14, 5]

let maxNumber54: any = (arr: number[]) => {
    let min: number = arr[0];
    for (let number of arr) {
        if (number <= min) {
            min = number;
        }
    }
    console.log(min);
}
maxNumber54(arr54)

// #EKRNVPM
// – створити функцію sum(arr54), яка приймає масив чисел, сумує значення елементів масиву та повертає його.Приклад sum([1, 2, 10]) //->13

let sum:number = 0;
maxNumber54 = (arr:number[]):void => {
    for (let number of arr) {
        sum = sum + number;
    }
}
maxNumber54([10, 2, 3, 14, 5])
console.log(sum);

// #kpsbSQCt2Lf
// – створити функцію swap(arr54, index1, index2).Функція міняє місцями значення у відповідних індексах

let swap53:any = (arr: number[], index1:number, index2:number):void => {
    if (index1 < arr.length && index2 < arr.length) {
        let temp:number = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
        console.log(arr);
    } else {
        console.log('Помилка');
    }
}
swap53([11, 22, 33, 44], 1, 3);