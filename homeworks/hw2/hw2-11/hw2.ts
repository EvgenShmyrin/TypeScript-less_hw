// є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код, який
// буде присвоювати змінній х значення “default”,  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні,
//     тобто ті, які приводиться до false, а це 0 null undefined і тд).

let x1: string | number | null | undefined | boolean = null
if (!x1) {
    console.log('Number is default')
} else {
    console.log('Number is OK')
}