// #5kla3yMpgp
// – (Те саме, тільки через клас)
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car

// #vV9a6584I5
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car

class Car {
    model: string;
    producer: string;
    year: number;
    maxSpeed: number;
    volume: number;
    driver?: any;

    constructor(model: string, producer: string, year: number, maxSpeed: number, volume: number) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    drive(): void {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info(): void {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key} – ${this[key]}`);
            }
        }
    }

    increaseMaxSpeed(newSpeed: number): void {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue: number): void {
        this.year = newValue;
    }

    addDriver(driver: any): void {
        this.driver = driver;
    }
}


let car:Car = new Car('shwed', 'volvo', 2002, 200, 350);
console.log(car)
car.drive();
car.info()
car.increaseMaxSpeed (100);
car.changeYear(2020)
car.addDriver({})
console.log(car)
