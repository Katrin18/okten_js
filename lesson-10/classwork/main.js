
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується
// та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let divForm1 = document.createElement('div');
// divForm1.innerText = 'Form 1:';
// document.body.appendChild(divForm1);
//
// let divForm2 = document.createElement('div');
// divForm2.innerText = 'Form 2:';
// document.body.appendChild(divForm2);
//
// let form1 = document.createElement('form');
// form1.setAttribute('name', 'form1');
// divForm1.appendChild(form1);
//
// let form2 = document.createElement('form');
// form2.setAttribute('name', 'form2');
// divForm2.appendChild(form2);
//
// let input1 = document.createElement('input');
// input1.setAttribute('name', 'input1');
//
// let input2 = document.createElement('input');
// input2.setAttribute('name', 'input2');
//
// let input3 = document.createElement('input');
// input3.setAttribute('name', 'input3');
//
// let input4 = document.createElement('input');
// input4.setAttribute('name', 'input4');
//
// let btn= document.createElement('button');
// btn.innerText = 'Enter';
//
// document.body.appendChild(btn);
//
// form1.appendChild(input1);
// form1.appendChild(input2);
// form2.appendChild(input3);
// form2.appendChild(input4);
//
//
//
// btn.onclick= ()=>{
//     console.log(document.forms.form1.input1.value);
//     console.log(document.forms.form1.input2.value);
//     console.log(document.forms.form2.input3.value);
//     console.log(document.forms.form2.input4.value);
// };
//


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк,
// третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// const input1 = document.createElement('input');
// input1.type = 'number';
// const input2 = document.createElement('input');
// input2.type = 'number';
// const input3 = document.createElement('input');
// const button = document.createElement('button');
// button.innerText = 'Table';
//
// button.onclick = () => {
//     const table = document.createElement('table');
//     table.style.width = '100%';
//     table.style.border = '3px solid black';
//     for (let i = 0; i < input1.value; i++) {
//         const tr = document.createElement('tr');
//         table.appendChild(tr);
//         for (let j = 0; j < input2.value; j++) {
//             const td = document.createElement('td');
//             table.appendChild(td);
//             td.textContent = input3.value;
//         }
//     }
//     document.body.appendChild(table);
// }
//
// document.body.appendChild(input1);
// document.body.appendChild(input2);
// document.body.appendChild(input3);
// document.body.appendChild(button);




// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let array = ['eblan', 'suka', 'blet'];
// const input = document.createElement('input');
// const btnCheck = document.createElement('button');
// btnCheck.innerText = 'Enter';
//
// input.type = 'text';
// btnCheck.onclick = () => {
//     const value = input.value;
//     for (let i = 0; i < array.length; i++) {
//         if (value === array[i]) {
//             alert('Stoppp!!!!');
//         }
//     }
// }
// document.body.appendChild(input);
// document.body.appendChild(btnCheck);



// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//


// let array = ['xxx', 'zzz', 'yyy'];
// const input = document.createElement('input');
// const btnCheck = document.createElement('button');
// btnCheck.innerText = 'Enter';
//
// input.type = 'text';
// btnCheck.onclick = () => {
//     const value = input.value;
//     for (const elem of array) {
//         if (value.includes(elem)) {
//             alert('Stop!');
//         }
//     }
// }
// document.body.appendChild(input);
// document.body.appendChild(btnCheck);
