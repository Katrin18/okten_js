// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let array=[];
// for(let i=0;i<=100;i++){
//     if(i%2===0){
//         array[i]=i;
//     }
// }
// console.log(array);
//
// let array1=[];
// for(let i=0;i<=100;i++){
//     if(i%2!=0){
//         array1[i]=i;
//     }
// }
// console.log(array1);
//
// let arrayRand=[];
// for(let i=0;i<=20;i++){
//     arrayRand[i]=Math.random();
// }
// console.log(arrayRand);
//
// let arrayRand1=[];
// const min = Math.ceil(8);
// const max = Math.floor(732);
// for(let i=0;i<=20;i++){
//     arrayRand1[i]=Math.floor(Math.random()*(max-min)+min);
// }
// console.log(arrayRand1);

const array=[15,75,86,96,33,303,67,100];

// 2. Вивести за допомогою console.log кожен третій елемен

// for(let i=2;i<array.length;i=i+2){
//     console.log(array[i]);
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// for(let i=2;i<array.length;i=i+2){
//     if(array[i]%2===0){
//         console.log(array);
//     }
// }


// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let arr=[];
// for(let i=2;i<array.length;i=i+2){
//     if(array[i]%2===0) {
//         arr[i] = array[i];
//     }
// }
// console.log(arr);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// for(let i=0;i<array.length;i++){
//     if(array[i+1]%2===0){
//         console.log(array[i]);
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// const arr=[100,250,50,168,120,345,188];
// let sum=0;
// let mid;
// for(let i=0;i<arr.length;i++){
// sum=sum+arr[i];
//     mid=sum/arr.length;
// }
//
// console.log(mid);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let arrayRand=[];
// let arraySecond=[];
// const min = Math.ceil(1);
// const max = Math.floor(100);
// for(let i=0;i<=20;i++){
//     arrayRand[i]=Math.floor(Math.random()*(max-min)+min);
//     arraySecond[i]=arrayRand[i]*5;
// }
// console.log(arraySecond)

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let arrayFirst=['js',true,15,78,false,'java',7];
// let arraySecond=[];
// for(let i=0;i<arrayFirst.length;i++){
//     if(typeof arrayFirst[i]==='number'){
//         arraySecond[i]=arrayFirst[i];
//     }
// }
// console.log(arraySecond);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//


// for(const user of usersWithId)
// {
//     for(const city of citiesWithId){
//         if(user.id===city.user_id){
//             user.address=city;
//         }
//     }
//
// }
// console.log(usersWithId);


//      - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let arr=[15,75,85,96,1,0,45,74,33,62];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2===0){
//         console.log(arr[i]);
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let arr=[15,75,85,96,1,0,45,74,33,62];
// let arrayTwo=[];
//
// for(let i=0;i<arr.length;i++){
//   arrayTwo[i]=arr[i];
// }
// console.log(arrayTwo);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.


let arr=[ 'a', 'b', 'c'];
let abc='';

// for(let i=0;i<arr.length;i++){
//     abc+=arr[i];
// }
// console.log(abc);

// let i=0;
// while (i<arr.length){
//     abc+=arr[i];
//     i++;
// }
// console.log(abc);

// for (let i of arr) {
//     abc+=i;
// }
// console.log(abc);
