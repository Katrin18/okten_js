//
// 1.
// Отримати відповідь з цього ресурсу відповідь,
// та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку,
//     при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться
//     всі коментарі поточного поста


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(response => {
//         let div = document.createElement('div');
//         for (const elem of response) {
//             let divPost = document.createElement('div');
//             divPost.innerHTML = `${elem.id}
//                                  ${elem.name}
//                                  ${elem.username}
//                                  ${elem.email}`;
//             let btn = document.createElement('button');
//             btn.innerText = 'Click';
//             btn.onclick = (id) => {
//                 fetch('https://jsonplaceholder.typicode.com/users/' + elem.id + '/posts')
//                     .then(response => response.json())
//                     .then(posts => {
//                         for (const post of posts) {
//                             if (elem.id === post.userId) {
//                                 let divPosts = document.createElement('div');
//                                 divPosts.classList.add('posts');
//                                 divPosts.innerHTML = `
//                                       UserId: ${post.userId}
//                                       Id: ${post.id}
//                                       Title: ${post.title}
//                                       Body: ${post.body}`;
//                                 divPost.appendChild(divPosts)
//                             }
//                             btn.disabled = true;
//                             let btnPost = document.createElement('button');
//                             btnPost.innerText = 'Enter';
//                             divPost.appendChild(btnPost);
//                             btnPost.onclick = (id) => {
//                                 fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
//                                     .then(response => response.json())
//                                     .then(comments => {
//                                         for (const comment of comments) {
//                                             if (post.id === comment.postId) {
//                                                 let divComments = document.createElement('div');
//                                                 divComments.classList.add('comments');
//                                                 divComments.innerHTML = `
//                                               PostId:${comment.postId}
//                                               ID: ${comment.id}
//                                               Name: ${comment.name}
//                                               Email: ${comment.email}
//                                               Body: ${comment.body}`;
//                                                 divPost.appendChild(divComments);
//                                             }
//                                             btnPost.disabled = true;
//                                         }
//                                     })
//
//
//                             }
//
//                         }
//                     })
//             }
//             document.body.appendChild(div);
//             div.appendChild(divPost);
//             divPost.appendChild(btn);
//         }
//     })


