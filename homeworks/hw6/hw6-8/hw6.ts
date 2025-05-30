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
type CoursesAndDurationArray68Type = {
    title: string,
    monthDuration: number
}

let coursesAndDurationArray68:CoursesAndDurationArray68Type[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sortMonthDuration68:CoursesAndDurationArray68Type[] = coursesAndDurationArray68.sort( function (a:CoursesAndDurationArray68Type, b:CoursesAndDurationArray68Type):number {
    return a.monthDuration - b.monthDuration;
    }
)
console.log(sortMonthDuration68)

 // — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців

let sortMonthDuration688:coursesAndDurationArray1[] = coursesAndDurationArray.filter( function (value:coursesAndDurationArray1):boolean {
        return value.monthDuration > 5;
    }
)
console.log(sortMonthDuration688)

//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let sortMonthDuration:any = coursesAndDurationArray.map( function (value:coursesAndDurationArray1, index:number): any {
        return {
            id: index +1, ...value
        }
    }
)
console.log(sortMonthDuration)
