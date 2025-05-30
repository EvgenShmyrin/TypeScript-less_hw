// #5hqyKTfmc
//
// – створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
//
//     let nums = [11,21,3];
//
// sortNums(nums,’ascending’) // [3,11,21]
//
// sortNums(nums,’descending’) // [21,11,3]

let nums:number[] = [11,21,3];

function sortNums(array:number[], direction:string):number[] {
    if (direction === 'ascending') {
        return array.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return array.sort((a:number, b:number):number => b - a);
    } else {
        console.log('Помилка. Використовуйте "ascending" або "descending".');
        return array;
    }
}
console.log(sortNums(nums,'descending'));