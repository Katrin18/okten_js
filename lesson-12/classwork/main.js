// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок
//     всі коментарі поточного поста


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(response => {
        let div = document.createElement('div');
        for (const elem of response) {
            let divPost = document.createElement('div');
            divPost.innerHTML = `${elem.userId}
                                  ${elem.id}
                                  ${elem.title}
                                  ${elem.body}`;
            let btn = document.createElement('button');
            btn.innerText = 'Click';
            btn.onclick = (id) => {
                fetch('https://jsonplaceholder.typicode.com/posts/' + elem.id + '/comments')
                    .then(response => response.json())
                    .then(comments => {
                        for (const comment of comments) {
                            if (elem.id === comment.postId) {
                                let divComments = document.createElement('div');
                                divComments.classList.add('comments');
                                divComments.innerHTML = `
                                        PostId:${comment.postId}
                                        ID: ${comment.id}
                                        Name: ${comment.name}
                                        Email: ${comment.email}
                                        Body: ${comment.body}`;
                                divPost.appendChild(divComments)
                            }
                            btn.disabled = true;
                        }
                    })
            }
            document.body.appendChild(div);
            div.appendChild(divPost);
            divPost.appendChild(btn);
        }
    })
