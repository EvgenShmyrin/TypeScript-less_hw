// #yo06d74c1C
// – є масив
// let coursesAndDurationArray = [
//     {title: ‘JavaScript Complex’, monthDuration: 5},
//     {title: ‘Java Complex’, monthDuration: 6},
//     {title: ‘Python Complex’, monthDuration: 6},
//     {title: ‘QA Complex’, monthDuration: 4},
//     {title: ‘FullStack’, monthDuration: 7},
//     {title: ‘Frontend’, monthDuration: 4}
// ];

//  — відсортувати його за спаданням за monthDuration
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// let sortMonthDuration = coursesAndDurationArray.sort( function (a, b) {
//     return a.monthDuration - b.monthDuration;
//     }
// )
// console.log(sortMonthDuration)

//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців

// let sortMonthDuration = coursesAndDurationArray.filter( function (value) {
//         return value.monthDuration > 5;
//     }
// )
// console.log(sortMonthDuration)

//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let sortMonthDuration = coursesAndDurationArray.map( function (value, index) {
        return {
            id: index +1, ...value
        }
    }
)
console.log(sortMonthDuration)
