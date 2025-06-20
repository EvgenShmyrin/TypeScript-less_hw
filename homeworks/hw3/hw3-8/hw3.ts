// є масив
// за допомогою циклу вивести:
//
//     – користувачів зі статусом true
//
//  – користувачів зі статусом false
//
//  – користувачів, які старші за 30 років
type users381 = {
    name: string,
    age: number,
    status: boolean,
}
let users38:users381[] = [

    {name: 'vasya', age: 31, status: false},

    {name: 'petya', age: 30, status: true},

    {name: 'kolya', age: 29, status: true},

    {name: 'olya', age: 28, status: false},

    {name: 'max', age: 30, status: true},

    {name: 'anya', age: 31, status: false},

    {name: 'oleg', age: 28, status: false},

    {name: 'andrey', age: 29, status: true},

    {name: 'masha', age: 30, status: true},

    {name: 'olya', age: 31, status: false},

    {name: 'max', age: 31, status: true}

];
console.log('Користувачі зі статусом (true):')
for (let user of users38) {
    for (let key in user) {
        if (user.status === true) {
            console.log(`${user.name}`);
        }
    }
}
console.log('')
console.log('Користувачі зі статусом (false):')
for (let user of users38) {
    for (let key in user) {
        if (user.status === false) {
            console.log(`${user.name}`);
        }
    }
}
console.log('')
console.log('Користувачі, які старші за 30 років:')
for (let user of users38) {
    for (let key in user) {
        if (user.age > 30) {
            console.log(`${user.name}`);
        }
    }
}