// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або
// конкатенує їх між собою.

// function func() {
//     let sum='';
//     for (const x of arguments) {
//         if(arguments.length>1){
//             sum=sum+x;
//         }
//         else {
//             console.log(x);
//         }
//     }
// }
// func('hello');

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// function getNew(array1,array2){
//     let newArray=[];
//     let sum=0;
//     for(let i=0;i<array1.length;i++){
//         for(let j=0;j<array2.length;j++){
//             if(i===j){
//                 newArray.push(array1[i]+array2[j]);
//             }
//         }
//     }
//
//     return newArray;
// }
// console.log(getNew([15,47,96,36,50],[96,15,42,3]));


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]


// function keys(array) {
//     let arrayKey=[];
// for(let i=0;i<array.length;i++){
//     const element=array[i];
//     for (const key in element) {
//         arrayKey[arrayKey.length]=key;
//     }
// }
// return arrayKey;
// }
// console.log(keys([{name: 'Katrin', age: 20}]));


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]


// function getValues(array) {
//     let arrayValues=[];
//     for(let i=0;i<array.length;i++){
//         const element=array[i];
//         for (const value in element) {
//             arrayValues.push(element[value]);
//         }
//     }
//     return arrayValues;
// }
// console.log(getValues([{name: 'Katrin', age: 20}]));
