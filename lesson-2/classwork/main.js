// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// let a=+prompt('Enter first number:');
// let b=+prompt('Enter second number:');
//
// if(a>b){
//     console.log(a);
// }
// else if(a<b){
//     console.log(b);
// }
// else if(a===b){
//     console.log('Числа рівні!');
// }
// else{
//     console.log('ERROR!!Enter numbers!');
// }


// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// let num=+prompt('Enter apartment number:');
// if(num>=1 && num<=20){
//     console.log('Перший підїзд!');
// }
// else if(num>20 && num<=48){
//     console.log('Другий підїзд!');
// }
// else if(num>48 && num<=90){
//     console.log('Третій підїзд!');
// }
// else {
//     console.log('Такої квартири не існує!');
// }



// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

// let number=+prompt('Enter number:');
// if(number===10){
//     alert('Вірно!');
// }
// else{
//     alert('Невірно!');
// }

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

// let x;
//
// if(typeof x==="string"){
//     console.log(2);
// }
// else if(typeof x ==="number"){
//     console.log(1);
// }
// else if(typeof x==="boolean"){
//     console.log(3);
// }
// else if(typeof x==="object" || typeof x==="array"){
//     console.log(4);
// }
// else{
//     console.log('ERROR!');
// }


// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let tem;
// if(tem>=10 && tem<=22){
//     alert('Ми йдемо вчитися!');
// }
// else {
//     alert('Ми сидимо вдома і вчимося олайн!');
// }

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .


// let prize=+prompt('Enter number from 1 to 5:');
// switch (prize){
//     case 1:
//         console.log('Ви виграли авто!');
//         break;
//     case 2:
//         console.log('Ви виграли мото!');
//         break;
//     case 3:
//         console.log('Ви виграли телефон!');
//         break;
//     case 4:
//         console.log('Ви виграли квартиру!');
//         break;
//     case 5:
//         console.log('Ви виграли кактус!');
//         break;
//     default:
//         console.log('Число не вірне!')
// }
