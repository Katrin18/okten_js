// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт
// потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних
// на попередньому етапі.


const div=document.createElement('div');
document.body.appendChild(div);
const key = 'favorites';
localStorage.setItem(key, JSON.stringify([]));

users.forEach(user => {
    const divUser = document.createElement('div');
    divUser.className = 'user';
    const divDesc = document.createElement('div');
    divDesc.innerText = `Name: ${user.name}\nAge: ${user.age}\nStatus: ${user.status}`
    const btn = document.createElement('button');
    btn.innerText = 'Добавити до улюблених:';
    btn.onclick = () => {
        const favorites = JSON.parse(localStorage.getItem(key));
        favorites.push(user);
        localStorage.setItem(key, JSON.stringify(favorites));
        btn.disabled = true;
    }
    divUser.appendChild(divDesc);
    divUser.appendChild(btn);
    div.appendChild(divUser);
})
