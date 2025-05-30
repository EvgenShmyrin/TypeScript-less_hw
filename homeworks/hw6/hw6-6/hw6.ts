// #Rbr5kEQ
//
// – є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.

let arr66:number[] = [10,8,-7,55,987,-1011,0,1050,0]

let newArrNumber:string[] = arr66.map(function(item:number):string{
    let newArr661:string = item.toString()
    return newArr661;
})
console.log(newArrNumber)