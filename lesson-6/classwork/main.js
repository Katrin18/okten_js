// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// const func = (name,sym) => {
//     let array = [];
//     if(name.includes(sym)){
//         let newName = name.split(sym)
//         newName.forEach((item) => {
//             if(item) array.push(item);
//         })
//         console.log(array.join(' '));
//     }
// }
// func('Harry..Potter','.');


//  - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// const funcRand = (length,count) => {
//     let array = [];
//     for(let i = 0; i < length; i++){
//         array.push(Math.floor(Math.random() * count));
//     }
//     console.log(array);
// }
// funcRand(20,100);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень
//  Відсортувати його за допомоги sort

// const funcRand = (length,count) => {
//     let array = [];
//     for(let i = 0; i < length; i++){
//         array.push(Math.floor(Math.random() * count));
//     }
//     console.log(array);
//     let sort = array.sort((n1,n2)=>{
//         return n1 - n2;
//     });
//     console.log(sort);
// }
// funcRand(20,100);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// const funcRand = (length,count) => {
//     let array = [];
//     for(let i = 0; i < length; i++){
//         array.push(Math.floor(Math.random() * count));
//     }
//     console.log(array);
//     let filter = array.filter(value => {
//         return value % 2 === 0;
//     })
//     console.log(filter);
// }
// funcRand(20,100);


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції)
// . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// const funcRand = (length,count) => {
//     let array = [];
//     for(let i = 0; i < length; i++){
//         array.push(Math.floor(Math.random() * count));
//     }
//     console.log(array);
//     return array.map(value => value.toString());
// }
// console.log(funcRand(20,100));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// const sortNums = (direction) => {
//     let array = [18,24,6];
//     let sort=array.sort((num1,num2)=>{
//         if(direction === 'ascending'){
//             return num1 - num2;
//         }
//        else{
//             return num2 - num1;
//         }
//
//     })
//     console.log(sort);
// }
// sortNums('ascending');

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let sort = coursesAndDurationArray.sort((c1,c2) => {
// return c2.monthDuration - c1.monthDuration;
// });
// console.log(sort);

// let filter = coursesAndDurationArray.filter(value => {
//     return value.monthDuration>5;
// });
// console.log(filter);



