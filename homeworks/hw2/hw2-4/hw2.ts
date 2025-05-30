// Створити масив з 10 об’єктами, які описують сутність “користувач”. Поля: name, username, password. Вивести в консоль пароль кожного користувача

type Book2 = {
    name: string,
    username: string,
    password: string,
}
let users5:Book2[] =[
    {name:'Vasya', username:'batman', password:'thdtg'},
    {name:'Petya', username:'police', password:'343566'},
    {name:'Anna', username:'flower', password:'aff3433fgzrt4'},
    {name:'Olya', username:'magic', password:'erer334'},
    {name:'Nikolay', username:'strike', password:'244354f'},
    {name:'Evgeniy', username:'1234', password:'sfgsfg45345'},
    {name:'Oleg', username:'user333', password:'esfsfs'},
    {name:'Sasha', username:'logo111', password:'3524534'},
    {name:'Nastya', username:'Nastya77', password:'w354353'},
    {name:'Lena', username:'Lena@', password:'sfs43'}
]
console.log(users5[0].password)
console.log(users5[1].password)
console.log(users5[2].password)
console.log(users5[3].password)
console.log(users5[4].password)
console.log(users5[5].password)
console.log(users5[6]['password'])
console.log(users5[7]['password'])
console.log(users5[8]['password'])
console.log(users5[9]['password'])

