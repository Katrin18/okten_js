// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function searchMin(num1,num2,num3) {
// if(num1<num2 && num1<num3){
//     console.log(num1);
// }
// else if(num2<num1 && num2<num3){
//     console.log(num2);
// }
// else{
//     console.log(num3);
// }
// }
// searchMin(101,52,85);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function searchMax(num1,num2,num3) {
//     if(num1>num2 && num1>num3){
//         console.log(num1);
//     }
//     else if(num2>num1 && num2>num3){
//         console.log(num2);
//     }
//     else{
//         console.log(num3);
//     }
// }
// searchMax(101,52,85);

// - створити функцію яка повертає найбільше число з масиву

// function searchMaxOfArray(array) {
// let max=0;
// for(let i=0;i<array.length;i++){
//     if(max<array[i]){
//         max=array[i];
//     }
// }
// console.log(max);
// }
// searchMaxOfArray([25,17,74,96,2,,85,74]);

// - створити функцію яка повертає найменьше число з масиву

// function searchMinOfArray(array) {
//     let min=array[0];
//     for(let i=0;i<array.length;i++){
//         if(min>array[i]){
//             min=array[i];
//         }
//     }
//     console.log(min);
// }
// searchMinOfArray([25,17,74,96,2,85,74]);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function sumArray(array) {
//     let sum=0;
//     for(let i=0;i<array.length;i++){
//         sum+=array[i];
//     }
//     return sum;
// }
// console.log(sumArray([25,17,74,96,2,85,74]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function searchAvarage(array) {
//     let sum=0;
//     let avarage=0;
//     for(let i=0;i<array.length;i++){
//         sum+=array[i];
//     }
//     avarage=Math.round(sum/array.length);
//     return avarage;
// }
// console.log(searchAvarage([25,17,74,96,2,85,74]));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);

// function minMax(arg) {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const element of arguments) {
//         if (element > max) {
//             max = element;
//         }
//         if (element < min) {
//             min = element;
//         }
//     }
//     console.log( max);
//     return min;
// }
// document.write(minMax(5, 10, 74, 95, 101))

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function random(length) {
//     let array=[];
//     for(let i=0;i<length;i++){
//         array[i]=Math.round(Math.random()*100);
//     }
//
//     console.log(array);
// }
// random(9);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.

// function randomLimit(limit) {
//     let array=[];
//     for(let i=0;i<10;i++){
//         array[i]=Math.round(Math.random()*limit);
//     }
//     console.log(array)
// }
// randomLimit(101);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].



// function reverse(array) {
//  let newArray=[];
//  for(let i=array.length-1;i>=0;i--){
//  newArray[i]=array[i];
//  }
//  console.log(newArray);
// }
// reverse([1,2,3]);
