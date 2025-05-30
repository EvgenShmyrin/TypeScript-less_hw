// #2ikXsE2WiKZ

// – Взяти масив з  Users[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)

class User2 {
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

let users387: User2[] = [
    new User2(1, 'oleg', 'ronda', 'ronda@gmail.com', '+380990272747'),
    new User2(2, 'vasya', 'garba', 'garbaa@gmail.com', '+380990272747'),
    new User2(3, 'petya', 'jovner', 'jovner@gmail.com', '+380990272747'),
    new User2(4, 'olya', 'shmarin', 'shmarina@gmail.com', '+380990272747'),
    new User2(5, 'olexander', 'sedov', 'sedov@gmail.com', '+380990272747'),
    new User2(6, 'oleg', 'remiga', 'remiga@gmail.com', '+380990272747'),
    new User2(7, 'olena', 'kulabuh', 'kulabuh@gmail.com', '+380990272747'),
    new User2(8, 'nastya', 'sitenko', 'sitenko@gmail.com', '+380990272747'),
    new User2(9, 'kolya', 'toyda', 'toyda@gmail.com', '+380990272747'),
    new User2(10, 'valya', 'rolla', 'rolla@gmail.com', '+380990272747'),
];

const usersFilter = (user: User2): boolean => user.id % 2 === 0;

let functionFilter: User2[] = users387.filter(usersFilter);

console.log(functionFilter);
