// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

let pContent = document.getElementById('content');
console.log(pContent);

// -- отримує текст з блоку з id "rules"

let divRules = document.getElementById('rules');
console.log(divRules);

// -- замініть текст параграфа з id 'content' на будь-який інший

pContent.innerText = 'Hello!';

// -- замініть текст параграфа з id 'rules' на будь-який інший

divRules.innerText = 'How are you?';

// -- змініть кожному елементу колір фону на червоний

let allEl = document.body.children;
for (const el of allEl) {
    el.style.background = 'red';
}

// -- змініть кожному елементу колір тексту на синій

let allText = document.body.children;
for (const el of allEl) {
    el.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

let rId = document.getElementById('rules');
console.log(rId.classList);


// -- поміняти колір тексту у всіх елементів fc_rules на червоний


let fcRules = document.getElementsByClassName('fc_rules');
for (const el of allEl) {
    el.style.color = 'red';
}
