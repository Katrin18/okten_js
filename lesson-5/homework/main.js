//Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// const square=(a,b)=> a*b;
// console.log(square(10,15));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// const square = (r) => 2 * 3.14 * r;
// console.log(square(4));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// const square=(h,r)=>2*3.14*h*r;
// console.log(square(10,4));

// - створити функцію яка приймає масив та виводить кожен його елемент

// const writeArray=(array)=> {
//     for(let i=0;i<array.length;i++){
//         console.log(array[i]);
//     }
// }
// writeArray([18,36,48,10,12,5,101]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// const paragraph=(text)=>{
//     document.write(`<p>${text}</p>`)
// }
// paragraph('hello my dear friend!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// const func=(text)=> {
//     document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
// }
// func('hi');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


// const func=(text,count)=>{
//     document.write(`<ul>`);
//     for(let i=0;i<count;i++){
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// func('hello',3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// const func=(array)=> {
//     document.write(`<ul>`);
//     for (let i=0;i<array.length;i++){
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ul>`);
// }
// func(['kateryna',20,2001,true,'Lviv',18]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// const array=[{id:15,name:'Katrin',age:20},{id:52,name:'Angela',age:25},{id:41,name: 'Vasya',age:85}];
// const func=(array)=> {
// for(let i=0; i<array.length; i++){
//     document.write(`<div>${array[i].id}-${array[i].name}-${array[i].age}</div>`);
// }
// }
// func(array);
