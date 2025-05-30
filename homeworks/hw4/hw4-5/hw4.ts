// – створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function textName45(text:string):void {
    document.write(`<div><p>${text}</p></div>`);
}
textName45('Hello World!');