// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li)
// та виводить його через document.write

let arr48:any[] = [true, "банан", 71, "груша", "Всім привіт"]
 function nameArr (name:any):void {
    document.write(`<div><ul>`);
    for (let element of name) {
        document.write(`<li>${element}</li>`);
    }
    document.write(`</ul></div>`);
 }
 // Питання: Чому підкреслює element?

 nameArr(arr48);
