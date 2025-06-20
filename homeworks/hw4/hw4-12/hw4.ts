// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
//
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr:number[], index1:number, index2:number):string | number[] {
    if (index1 < arr.length && index2 < arr.length) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2]=temp;
        return arr;
    }else{
        return 'Помилка';
    }
}
console.log(swap([11,22,33,44],1,7));