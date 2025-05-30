// #zg6Fifnqig
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку

class Popelyushka{
    name: string;
    age: number;
    sizeLag: number;
    constructor(name:string, age:number, sizeLag:number) {
        this.name = name;
        this.age = age;
        this.sizeLag = sizeLag;
    }
}
let popelyushky:Popelyushka[] = [
    new Popelyushka("Олена", 18, 36),
    new Popelyushka("Марія", 20, 36),
    new Popelyushka("Ірина", 19, 37),
    new Popelyushka("Наталя", 21, 38),
    new Popelyushka("Анастасія", 22, 36),
    new Popelyushka("Юлія", 23, 35),
    new Popelyushka("Катерина", 24, 40),
    new Popelyushka("Тетяна", 25, 37),
    new Popelyushka("Вікторія", 26, 38),
    new Popelyushka("Алла", 27, 39),
];
 class Prince{
     name: string;
     age: number;
     slipper: number;
     constructor(name:string, age:number, slipper:number) {
         this.name = name;
         this.age = age;
         this.slipper = slipper;
     }
 }
 let prince:Prince = new Prince('alex', 33, 35);

for (let name of popelyushky) {
    if (name.sizeLag === 35) console.log(`${name.name} is wife for prince`);
}
let wife:any = popelyushky.find(girl => girl.sizeLag === prince.slipper);
if (wife) {
    console.log(`${wife.name} is wife for prince`);
} else {
    console.log("No matching popelyushka found.");
}