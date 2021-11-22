// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function square(a,b) {
//     let s=a*b;
//     return s;
// }
// console.log(square(10,15));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function square(r) {
//     let c=2*3.14*r;
//     return c;
// }
// console.log(square(4));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function square(h,r){
//     let s=2*3.14*h*r;
//     return s;
// }
// console.log(square(10,4));

// - створити функцію яка приймає масив та виводить кожен його елемент

// function writeArray(array) {
//     for(let i=0;i<array.length;i++){
//         console.log(array[i]);
//     }
// }
// writeArray([18,36,48,10,12,5,101]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph(text){
//     document.write(`<p>${text}</p>`)
// }
// paragraph('hello my dear friend!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function func(text) {
//     document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
// }
// func('hi');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


// function func(text,count){
//     document.write(`<ul>`);
//     for(let i=0;i<count;i++){
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// func('hello',3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function func(array) {
//     document.write(`<ul>`);
//     for (let i=0;i<array.length;i++){
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ul>`);
// }
// func(['kateryna',20,2001,true,'Lviv',18]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// let array=[{id:15,name:'Katrin',age:20},{id:52,name:'Angela',age:25},{id:41,name: 'Vasya',age:85}];
// function func(array) {
// for(let i=0; i<array.length; i++){
//     document.write(`<div>${array[i].id}-${array[i].name}-${array[i].age}</div>`);
// }
// }
// func(array);
