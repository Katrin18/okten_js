// <!--// На странице user-details.html:-->
// <!--// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.-->
// <!--// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера-->
// <!--// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)-->
// <!--// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,-->
// <!--// которая имеет детальную информацию про текущий пост.-->
//


let userDetails = JSON.parse(localStorage.getItem('userDetails'));

for (const userDetail of userDetails) {
    let div = document.createElement('div');
    div.classList.add('userDetails');
    div.innerText = JSON.stringify(userDetail);
    document.body.appendChild(div);
}
    let btn = document.createElement('button');
btn.classList.add('btn');
    btn.innerText = 'post of current user';
    document.body.appendChild(btn);

btn.onclick = (id) => {
    fetch('https://jsonplaceholder.typicode.com/users/' + userDetails[0] + '/posts')
        .then(response => response.json())
        .then(posts => {
            let divPost = document.createElement('div');
            for (const post of posts) {
                if (userDetails[0] == post.userId) {
                    let divTitle = document.createElement('div');
                    divTitle.classList.add('title');
                    divTitle.innerHTML = `
                                      Title: ${post.title} `;
                    divPost.appendChild(divTitle);

                    btn.disabled = true;
                    let btnPost = document.createElement('button');
                    btnPost.classList.add('btnPost');
                    btnPost.innerText = 'Details';
                    divTitle.appendChild(btnPost);
                    btnPost.onclick = (id) => {
                        window.location.href = 'post.details.html';
                        let array = [`${post.userId}`,
                            `${post.id}`,
                            `${post.title}`,
                            `${post.body}`];
                        let str = JSON.stringify(array);
                        localStorage.setItem('postDetails', str);
                    }

                }
            }
            document.body.appendChild(divPost);
        })


}
