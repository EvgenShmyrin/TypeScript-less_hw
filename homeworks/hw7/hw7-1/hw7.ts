// #XjJuucOMR0
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об’єктами new User(….)

class User71 {
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;

    constructor(id: number, name: string, surname: string, email: string, phone: string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}

let user: User71 = new User71(1, 'oleg', 'ronda', 'ronda@gmail.com', '+380990272747');
console.log(user);

let users1: User71[] = [
    new User71(1, 'oleg', 'ronda', 'ronda@gmail.com', '+380990272747'),
    new User71(2, 'vasya', 'garba', 'garbaa@gmail.com', '+380990272747'),
    new User71(3, 'petya', 'jovner', 'jovner@gmail.com', '+380990272747'),
    new User71(4, 'olya', 'shmarin', 'shmarina@gmail.com', '+380990272747'),
    new User71(5, 'olexander', 'sedov', 'sedov@gmail.com', '+380990272747'),
    new User71(6, 'oleg', 'remiga', 'remiga@gmail.com', '+380990272747'),
    new User71(7, 'olena', 'kulabuh', 'kulabuh@gmail.com', '+380990272747'),
    new User71(8, 'nastya', 'sitenko', 'sitenko@gmail.com', '+380990272747'),
    new User71(9, 'kolya', 'toyda', 'toyda@gmail.com', '+380990272747'),
    new User71(10, 'valya', 'rolla', 'rolla@gmail.com', '+380990272747'),
];

console.log(users1);
