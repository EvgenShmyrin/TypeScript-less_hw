// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ.
//     Для кожного об’єкту окремий блок.
type Users38Type = {
    id:number,
    name:string,
    age:number,
}
let users49:Users38Type[] = [
    {id: 2, name: "Андрій", age: 30},
    {id: 3, name: "Ірина", age: 22},
    {id: 4, name: "Максим", age: 27},
    {id: 5, name: "Софія", age: 24}
]

function nameFunction(users:any[]):void {
    document.write(`<div>`)
    for(let user of users49){
        document.write(`<div><p>${user.id} ${user.name} ${user.age}</p></div>`)
    }
    document.write(`</div>`)
}
nameFunction(users49);

