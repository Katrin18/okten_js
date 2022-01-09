// <!--В index.html-->
// <!--1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users-->
// <!--2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.-->
// <!--3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,-->
// <!--которая имеет детальную информацию про объект на который кликнули-->
//
// <!--// На странице user-details.html:-->
// <!--// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.-->
// <!--// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера-->
// <!--// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)-->
// <!--// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,-->
// <!--// которая имеет детальную информацию про текущий пост.-->
// <!--На странице post-details.html:-->
// <!--7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.-->
// <!--8 Ниже информации про пост, вывести все комментарии текущего поста -->
// <!--(эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)-->
//


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let div = document.createElement('div');
        for (const user of users) {
            let divUser = document.createElement('div');
            divUser.classList.add('divUser');
            divUser.innerHTML = `${user.id}
                                     ${user.name}`;
            let btn = document.createElement('button');
            btn.classList.add('button');
            btn.innerText = 'To choose';
            btn.onclick = (id) => {
                window.location.href = 'user.details.html';

                let array = [`${user.id}`,
                    `${user.name}`,
                    `${user.username}`,
                    `${user.email}`,
                    `${user.address.street}`,
                    `${user.address.suite}`,
                    `${user.address.city}`,
                    `${user.address.zipcode}`,
                    `${user.address.geo.lat}`,
                    `${user.address.geo.lng}`,
                    `${user.phone}`,
                    `${user.website}`,
                    `${user.company.name}`,
                    `${user.company.bs}`,
                    `${user.company.catchPhrase}`];
                let str = JSON.stringify(array);
                localStorage.setItem('userDetails', str);
            }
            let divUserDesc = document.createElement('div');
            document.body.appendChild(div);
            div.appendChild(divUser);
            divUser.appendChild(btn);

        }
    })



