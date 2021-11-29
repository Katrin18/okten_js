// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str='hello world';
// let lorem='lorem ipsum';
// let javascript='javascript is cool';
//
// console.log(str.length);
// console.log(lorem.length);
// console.log(javascript.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str='hello world';
// let lorem='lorem ipsum';
// let javascript='javascript is cool';
//
// let newStr=str.toUpperCase();
// let newLorem=lorem.toUpperCase();
// let newJavascript=javascript.toUpperCase();
//
// console.log(newStr);
// console.log(newLorem);
// console.log(newJavascript);


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str = 'HELLO WORLD';
// let lorem = 'LOREM IPSUM';
// let javascript='JAVASCRIPT IS COOL';
//
// let newStr=str.toLowerCase();
// let newLorem=lorem.toLowerCase();
// let newJavascript=javascript.toLowerCase();
//
// console.log(newStr);
// console.log(newLorem);
// console.log(newJavascript);


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.


// let str = ' dirty string   ';
// let newStr=str.trim();
// console.log(newStr);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// const stringToaaray=(str)=>{
//
//     let arr = str.split(' ');
//     console.log(arr);
//     document.write(arr);
// }
// stringToaaray('Каждый охотник желает знать');

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається
// із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// const delete_characters = (str, index) => {
//    let newStr= str.substr(0, index);
//    console.log(newStr);
// };
// delete_characters('Каждый охотник желает знать', 7);


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// const insert_dash=(str)=>{
//     let newStr=str.replaceAll(' ','-');
//     console.log(newStr);
// }
// insert_dash('HTML JavaScript PHP');

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка
// з нижнього регістру у верхній.()

// const func=(str)=>{
//     let newStr=str.charAt(0).toUpperCase()+str.slice(1);
//     console.log(newStr);
// }
// func('hello my friends!');


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.


// const capitalize = (str) => {
//     let newStr = str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
//     console.log(newStr);
// };
//
// capitalize('hello my frieds!');
