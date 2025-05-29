// Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors. Поле “автори” – являється  масивом. Кожен автор має поля name та age.

type Autor = {name: string, age: number,}
type Book1 = {
    title: string,
    pageCount: number,
    genre: string,
    authors: [Autor],
}

let book1_1: Book1 = {
    title:'War and peace',
    pageCount:1300,
    genre:'Novel',
    authors:[
        {
            name:'Tolstoy',
            age: 195
        }
    ]
}
