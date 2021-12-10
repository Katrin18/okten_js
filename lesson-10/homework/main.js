// - Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// const elem = document.getElementById('text');
// elem.innerText = 'Text';
// const button = document.getElementById('btn1');
// button.innerText = 'Hide';
// button.onclick = () => {
//     elem.style.display = 'none';
// }
// document.body.appendChild(button);

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// const buttonDelete = document.createElement('button');
// buttonDelete.innerText = 'Delete';
// buttonDelete.onclick = () => {
//     buttonDelete.style.display = 'none';
// }
// document.body.appendChild(buttonDelete);

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача

// const button = document.createElement('button');
// button.innerText = 'Enter';
// const input = document.createElement('input');
// input.type = 'number';
// button.onclick = () => {
//     const value = input.value;
//     if (value < 18) {
//         alert('STOP! You are not 18 years old.');
//     }
// }
// document.body.appendChild(input);
// document.body.appendChild(button);


// - Создайте меню, которое раскрывается/сворачивается при клике

// const menu = document.getElementById('menu');
// const drinks = document.getElementById('drinks');
//
// menu.onclick = () => {
//     if (drinks.style.display === 'block') {
//         drinks.style.display = 'none';
//     } else {
//         drinks.style.display = 'block';
//     }
// }


// - Создать список комментариев , пример объекта коментария -
// {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.


// let comments = [
//     {name: 'loremA', body: 'lorem ipsum dolo sit ameti A'},
//     {name: 'loremB', body: 'lorem ipsum dolo sit ameti B'},
//     {name: 'loremC', body: 'lorem ipsum dolo sit ameti C'},
//     {name: 'loremD', body: 'lorem ipsum dolo sit ameti D'},
// ];
//
// const list = document.createElement('ul');
// for (let i = 0; i < comments.length; i++) {
//     const li = document.createElement('li');
//     const div = document.createElement('div');
//     const name = document.createElement('h2');
//     name.innerText = comments[i].name;
//     const body = document.createElement('body');
//     body.innerText = comments[i].body;
//     li.append(name, body);
//     div.style.backgroundColor = 'pink';
//     div.style.margin = '20px';
//     div.appendChild(li);
//     list.appendChild(div);
//     const button = document.createElement('button');
//     button.innerText = 'Hide';
//     div.appendChild(button);
//     button.onclick = () => {
//         body.style.display = 'none';
//     }
// }
// document.body.appendChild(list);
