// з файлу arrays.js ( лежить у вкладеннях)  взяти масив coursesAndDurationArray. За допомогою іф перевірити кожен його
// елемент на тривалість навчання. У випадку, якщо тривалість довша за 5 місяців, вивести в консоль “Супер”.

type coursesAndDurationArray1 = {
    title:string,
    monthDuration:number,
}
let coursesAndDurationArray:coursesAndDurationArray1 [] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]
if (coursesAndDurationArray[0]['monthDuration'] > 5){
    console.log('Тривалість курсу JavaScript Complex Супер')
}
if (coursesAndDurationArray[1]['monthDuration'] > 5){
    console.log('Тривалість курсу Java Complex Супер')
}
if (coursesAndDurationArray[2]['monthDuration'] > 5) {
    console.log('Тривалість курсу Python Complex Супер')
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Тривалість курсу QA Complex Супер')
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Тривалість курсу FullStack Супер')
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Тривалість курсу Frontend Супер')
}
