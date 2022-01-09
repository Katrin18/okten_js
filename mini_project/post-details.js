// <!--На странице post-details.html:-->
// <!--7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.-->
// <!--8 Ниже информации про пост, вывести все комментарии текущего поста -->
// <!--(эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)-->
//
let postDetails = JSON.parse(localStorage.getItem('postDetails'));

for (const postDetail of postDetails) {
    let div = document.createElement('div');
    div.classList.add('postDetails');
    div.innerText = JSON.stringify(postDetail);
    document.body.appendChild(div);
}
fetch('https://jsonplaceholder.typicode.com/posts/' + postDetails[0] + '/comments')
    .then(response => response.json())
    .then(comments => {
        let div = document.createElement('div');
        for (const comment of comments) {
            if (postDetails[0] == comment.postId) {
                let divComments = document.createElement('div');
                divComments.classList.add('comments');
                divComments.innerHTML = `
                                      PostId: ${comment.postId} 
                                      Id: ${comment.id}
                                      Name:${comment.name}
                                      Email:${comment.email}
                                      Body:${comment.body}
                                      `;
                div.appendChild(divComments)
            }
        }
        document.body.appendChild(div);
    })
