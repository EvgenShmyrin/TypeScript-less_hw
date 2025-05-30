// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
// Приклад моделі кінцевого об’єкту
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let cards1: any[] = [];
let suits1: string[] = ['spade', 'diamond', 'heart', 'clubs']
let nameValue1: (string | number)[] = [6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace']

for (let suit of suits1) {
    if (suit === 'diamond' || suit === 'heart') {
        for (let name of nameValue1) {
            cards1.push({value: name, cardSuit: suit, color: 'red'});
        }
    }
    if (suit === 'spade' || suit === 'clubs') {
        for (let name of nameValue1) {
            cards1.push({value: name, cardSuit: suit, color: 'black'});
        }
    }
}
console.log(cards1);

let reduce: (number | string)[] = cards1.reduce((accumulator: any, card: any): any => {
    if (card.cardSuit === 'spade') {
        accumulator.spades.push(card);
    }
    if (card.cardSuit === 'diamond') {
        accumulator.diamond.push(card);
    }
    if (card.cardSuit === 'heart') {
        accumulator.heart.push(card);
    }
    if (card.cardSuit === 'clubs') {
        accumulator.clubs.push(card);
    }
    return accumulator;
}, {spades: [], diamond: [], heart: [], clubs: []});
console.log(reduce)