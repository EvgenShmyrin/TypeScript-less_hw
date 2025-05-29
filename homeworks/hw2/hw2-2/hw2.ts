// Створити 3 об’єкти які описують книги. Поля об’єкту : title, pageCount, genre.

type Book = {
    title: string,
    pageCount: number,
    genre: string,
}

let book1: Book = {title:'War and peace', pageCount:1300, genre:'Novel'};
let book2: Book = {title:'Crime and Punishment', pageCount:608, genre:'Drama'};
let book3: Book = {title:'Mind hacking', pageCount:450, genre:'Self-development'};