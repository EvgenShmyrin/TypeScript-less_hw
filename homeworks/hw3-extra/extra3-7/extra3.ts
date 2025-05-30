// – Дано 2 масиви з рівною кількістю об’єктів.
//     Масиви:

type UsersWithIdType = {
    id: number,
    name: string,
    age: number,
    status: boolean
}
type CitiesWithIdType = {
    user_id: number,
    country: string,
    city: string,
}
let usersWithId:UsersWithIdType[] = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId: CitiesWithIdType[] = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
// З’єднати в один об’єкт користувача та місто з відповідними “id” та “user_id” .Записати цей об’єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: ‘vasya’,
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: ‘Ukraine’,
//                 city: ‘Ternopil’
//             }
//
//         },
// // TO BE CONTINUED …..
// ]
let total_users:any=[];
let i37:number=0;
for (let user of usersWithId){
    if (user.id === 1){
        total_users.push(usersWithId[i37]);
        for (let user2 of citiesWithId){
            if (user2.user_id === 1) {
                total_users[i37].country = user2.country;
                total_users[i37].city = user2.city;
            }
        }
    }if (user.id === 2){
        total_users.push(usersWithId[i37]);
        for (let user2 of citiesWithId){
            if (user2.user_id === 2) {
                total_users[i37].country = user2.country;
                total_users[i37].city = user2.city;
            }
        }
    }if (user.id === 3){
        total_users.push(usersWithId[i37]);
        for (let user2 of citiesWithId){
            if (user2.user_id === 3) {
                total_users[i37].country = user2.country;
                total_users[i37].city = user2.city;
            }
        }
    }if (user.id === 4){
        total_users.push(usersWithId[i37]);
        for (let user2 of citiesWithId){
            if (user2.user_id === 4) {
                total_users[i37].country = user2.country;
                total_users[i37].city = user2.city;
            }
        }
    }i37++
}console.log(total_users);