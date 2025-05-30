// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
function cylinderS(r: number, h: number): number {
    return 3.14 * r * r * h;
}

let S43: number = cylinderS(5, 10);
console.log(S43);