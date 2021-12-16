// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(response => {
//         let div=document.createElement('div');
//         div.classList.add('class');
//         for (const elem of response) {
//             let divComment = document.createElement('div');
//             divComment.classList.add('post');
//             divComment.innerHTML = `<div>${elem.userId}</div>
//                                     <div>${elem.id}</div>
//                                     <div>${elem.title}</div>
//                                     <div>${elem.body}</div>`;
//
//             document.body.appendChild(div);
//             div.appendChild(divComment);
//         }
//     })



//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments


// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(response => response.json())
//     .then(response => {
//         for (const elem of response) {
//             let divComment = document.createElement('div');
//             divComment.innerHTML = `<div>${elem.postId}</div>
//                                     <div>${elem.id}</div>
//                                     <div>${elem.name}</div>
//                                     <div>${elem.email}</div>
//                                     <div>${elem.body}</div>`;
//
//             document.body.appendChild(divComment);
//         }
//     })
