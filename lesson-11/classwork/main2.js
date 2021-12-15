const key = 'favorites';
const div=document.createElement('div');
document.body.appendChild(div);
const users = JSON.parse(localStorage.getItem(key));

users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.className = 'user';
    const divDesc = document.createElement('div');
    divDesc.innerText = `Name: ${user.name}\nAge: ${user.age}\nStatus: ${user.status}`;
    userDiv.appendChild(divDesc);
    div.appendChild(userDiv);
})
