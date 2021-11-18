// --створити масив з:
//  з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let array=[5,10,78,96,3];
// let arraySt=['js','java','pyton','html','css'];
// let arrayOt=[10,'str',18,true,false];
//
// console.log(array)
// console.log(arraySt);
// console.log(arrayOt);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let array=[];
// array[0]=7;
// array[1]=75;
// array[2]=85;
// array[3]=9;
//
// console.log(array);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for(let i=0;i<=10;i++){
//     document.write(`<div>hello</div>`);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for(let i=0;i<=10;i++){
//     document.write(`<div>hello${[i]}</div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i=0;
// while (i<=20){
//     document.write(`<h1>hello</h1>`)
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i=0;
// while (i<=20){
//     document.write(`<h1>hello${[i]}</h1>`)
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let array=[15,75,86,9,1,4,7,0,96,101];
// for (const i of array) {
//     console.log(i);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let array=['str','br','ntk','join','lmop','res','sed','vaf','fas','vrew'];
// for (const i of array) {
//     console.log(i);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let array=[15,19,31,true,'str','bln',false,7,96,0];
// for (const i of array) {
//     console.log(i);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let array=[15,19,31,true,'str','bln',false,7,96,0];
// for (const i of array) {
//     if(typeof i === "boolean"){
//         console.log(i);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let array=[15,19,31,true,'str','bln',false,7,96,0];
// for (const i of array) {
//     if(typeof i === "number"){
//         console.log(i);
//     }
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let array=[15,19,31,true,'str','bln',false,7,96,0];
// for (const i of array) {
//     if(typeof i === "string"){
//         console.log(i);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let array=[];
//
// array[0]=15;
// array[1]=7;
// array[2]=true;
// array[3]='str';
// array[4]=false;
// array[5]=85;
// array[6]=17;
// array[7]=false;
// array[8]='bln';
// array[9]='sentr';
//
// for (const x of array) {
//     console.log(x);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for(let i=0;i<=10;i++){
//     console.log(i);
//     document.write(i);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for(let i=0;i<=100;i++){
//     console.log(i);
//     document.write(i+' ');
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for(let i=0;i<=100;i=i+2){
//     console.log(i);
//     document.write(i+' ');
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for(let i=0;i<=100;i++){
//     if(i%2===0){
//         console.log(i);
//         document.write(i+' ');
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for(let i=0;i<=100;i++){
//     if(i%2!=0){
//         console.log(i);
//         document.write(i+' ');
//     }
// }
