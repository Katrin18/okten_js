// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time=+prompt('Enter time:');
// if(time >= 0 && time <= 15){
//     console.log('Перша частина години!');
// }
// else if(time > 15 && time <= 30){
//     console.log('Друга частина години!');
// }
// else if(time > 30 && time <= 45){
//     console.log('Третя частина години!');
// }
// else if(time > 45 && time <= 59){
//     console.log('Четверта частина години!');
// }
// else{
//     console.log('Введіть правильно!');
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day=1;
//
// if(day >= 1 && day <= 10){
//     console.log('Перша декада місяця!');
// }
// else if(day >10 && day<=20){
//     console.log('Друга декада місяця!');
// }
// else if(day>20 && day<=31){
//     console.log('Третя декада місяця!');
// }
// else{
//     console.log('Введіть правильно день!');
// }


// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let test;
// if(test!==true){
//     document.write('Вірно!');
// }
// else{
//     document.write('Неправильно!');
// }

// let test=true;
// let acd=test===false?'Вірно!':'Неправильно!';
// document.write(acd);



// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a;
//
// if(a!==0){
//     document.write('Вірно!');
// }
// else{
//     document.write('Невірно!');
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

// let day=+prompt('Enter day:');
// switch(day){
//     case 1:
//         document.write('Monday');
//         break;
//     case 2:
//         document.write('Tuesday');
//         break;
//     case 3:
//         document.write('Wednesday');
//         break;
//     case 4:
//         document.write('Thursday');
//         break;
//     case 5:
//         document.write('Friday');
//         break;
//     case 6:
//         document.write('Saturday');
//         break;
//     case 7:
//         document.write('Sunday');
//         break;
//     default:
//         document.write('???');
//
// }

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

// let year=+prompt('Enter year:');
// if(year%4===0){
//     document.write('Високосний рік!');
// }
// else {
//     document.write('Невисокосний рік!');
// }

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let user=prompt('Яка «офіційна» назва JavaScript?');
// if(user==='ECMAScript'){
//     document.write('Правильно!');
// }
// else{
//     document.write('Не знаєте? ECMAScript!');
// }
