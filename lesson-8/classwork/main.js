// Взяти файл template_2.html та працювати в ньому

// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

// let classGroup = document.getElementById('main_header');
// classGroup.classList.add('sep-2021');

// b) робить шириниу елементу ul 400px

// let ulTag = document.getElementsByTagName('ul');
// for (const ulTagElement of ulTag) {
//     ulTagElement.style.width = '400px';
// }

// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let classlinkList = document.getElementsByClassName('linkList');
// for (const classlinkListElement of classlinkList) {
//     classlinkListElement.style.width = '50%';
// }

// d) отримує текст який зберігається в елементі з класом listElement2

// let clListElement2 = document.getElementsByClassName('listElement2');
// for (let elem of clListElement2) {
//     console.log(elem.textContent);
// }

// e) отримує всі елементи li та змінює ім колір фону на сірий

// let liGet = document.getElementsByTagName('li');
// for (const elem of liGet) {
//     elem.style.background = 'silver';
// }

// f) отримує всі елементи 'a' та додає їм клас anchor

// let aGet = document.getElementsByTagName('a');
// for (const elem of aGet) {
//     elem.classList.add('anchor');
//     console.log(elem);
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів

// let aGetLink3 = document.getElementsByTagName('a');
// for (const elem of aGet) {
//     if (elem.textContent === 'link3') {
//         elem.style.fontSize = '40px';
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let xxx = document.getElementsByTagName('a');
// for (const elem of aGet) {
//     let text = elem.textContent;
//     elem.classList.add(`element_${text}`);
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let elementSubHeader = document.getElementsByClassName('sub-header');
// for (const elem of elementSubHeader) {
//     elem.style.background = prompt('Enter color:');
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст
// елемнту = content 2 segment . Колір отримати з prompt()

// let elemContent = document.getElementsByClassName('sub-header');
// for (const elem of elemContent) {
//     if (elem.textContent === 'content 2 segment') {
//         elem.style.background = prompt('Enter color:');
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому теkст на довільний. Текст отримати з prompt()

// let elemContent_1 = document.getElementsByClassName('content_1');
// for (const elem of elemContent_1) {
//     elem.innerText = prompt('Enter text:');
// }

// l) отримати елементи p та змінити їм padding на 20px

// let pGet = document.getElementsByTagName('p');
// for (const element of pGet) {
//     element.style.padding = '20px';
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let elemText2 = document.getElementsByClassName('text2');
// for (const elm of elemText2) {
//     elm.innerText = 'sep-2021';
// }
