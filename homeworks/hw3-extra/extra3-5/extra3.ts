// #reLkOkTB29Q
// створити масив книжок (назва, кількість сторінок, автори, жанри).

type ArrType = {
    title: string,
    pages: number,
    authors: AuthorsType,
    genres: GenresType,
}
type AuthorsType = string[]
type GenresType = string[]

let arr354: ArrType[] = [
    {
        title: "Майстер і Маргарита",
        pages: 480,
        authors: ["Михайло Булгаков"],
        genres: ["Роман", "Містика", "Фантастика"]
    },
    {
        title: "Тарас Бульба",
        pages: 320,
        authors: ["Микола Гоголь"],
        genres: ["Пригоди", "Історичний роман"]
    },
    {
        title: "Сто років самотності",
        pages: 417,
        authors: ["Габріель Гарсія Маркес", "Angey Duda"],
        genres: ["Магічний реалізм", "Роман"]
    },
    {
        title: "Гаррі Поттер і філософський камінь",
        pages: 350,
        authors: ["Джоан Ролінг"],
        genres: ["Фентезі", "Пригоди"]
    }
];

// – знайти найбільшу книжку.

let long_page: number = arr354[0].pages
let long_book35: any = []
for (let key of arr354) {
    if (key.pages >= long_page) {
        long_page = key.pages
        long_book35.push(key)
    }
}
console.log(`Найбільша книга має ${long_page} сторінок і називається "${long_book35[0].title}" `)

// – знайти книжку/ки з найбільшою кількістю жанрів

let long_genre_count: number = 0
let long_book_title: any = ''
for (let key of arr354) {
    if (key.genres.length >= long_genre_count) {
        long_book_title.push(key.title)
    }
}
console.log(`Книга "${long_book_title[0]}" має найбільшу кількість жанрів`)

// – знайти книжку/ки з найдовшою назвою

let long_title: number = 0
let long_book: any = []
for (let key of arr354) {
    if (key.title.length >= long_title) {
        long_title = key.title.length;
        long_book.push(key.title)
    }
}
console.log(`Книга "${long_book[0]}" має найдовшу назву - ${long_title} букв `)

// – знайти книжку/ки, які писали 2 автори

let twu_authors: number = 1
let authors_book: any = []
for (let key of arr354) {
    if (key.authors.length > twu_authors) {
        twu_authors = key.authors.length;
        authors_book.push(key.title)
    }
}
console.log(`Книга "${authors_book[0]}" має ${twu_authors} авторів `)

// – знайти книжку/ки, які писав 1 автор

let one_authors: number = 0;
let book: any = [];
for (let key of arr354) {
    if (key.authors.length === 1) {
        one_authors++;
        book.push(key.title)

    }
}
console.log(`${one_authors} книги: "${book}" мають по одному автору.`)
