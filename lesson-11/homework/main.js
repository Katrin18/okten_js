// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

// let divForm1 = document.createElement('div');
// divForm1.innerText = 'Form 1:';
// document.body.appendChild(divForm1);
//
// let form1 = document.createElement('form');
// form1.setAttribute('name', 'form1');
// divForm1.appendChild(form1);
//
// let input1 = document.createElement('input');
// input1.setAttribute('name', 'input1');
// input1.type='text';
//
// let input2 = document.createElement('input');
// input2.setAttribute('age', 'input2');
// input2.type='number';
//
// let btn = document.createElement('button');
// btn.innerText = 'Enter';
//
// form1.appendChild(input1);
// form1.appendChild(input2);
// form1.appendChild(btn);
//
// btn.onclick = () => {
//     class Users {
//         constructor(name, age) {
//             this.name = name;
//             this.age = age;
//         }
//     }
//
//     let array = new Users(`${input1.value}`, `${input2.value}`);
//     let str = JSON.stringify(array);
//     localStorage.setItem('user', str);
// }


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвц
//     і форми об'єкти зберігаються в масиві в локальному сховищі.


// let divForm2 = document.createElement('div');
// divForm2.innerText = 'Form 2:';
// document.body.appendChild(divForm2);
//
// let form2 = document.createElement('form');
// form2.setAttribute('name', 'form2');
// divForm2.appendChild(form2);
//
// let inputModel = document.createElement('input');
// inputModel.setAttribute('model', 'inputModel');
//
// let inputType = document.createElement('input');
// inputType.setAttribute('type', 'inputType');
//
// let inputVolume = document.createElement('input');
// inputVolume.setAttribute('volume', 'inputVolume');
//
// let btn = document.createElement('button');
// btn.innerText = 'Enter';
//
// form2.appendChild(inputModel);
// form2.appendChild(inputType);
// form2.appendChild(inputVolume);
// form2.appendChild(btn);
//
// btn.onclick = () => {
//     class Cars {
//         constructor(model, type, volume) {
//             this.model = model;
//             this.type = type;
//             this.volume = volume;
//         }
//     }
//
//     let array = [`${inputModel.value}`, `${inputType.value}`, `${inputVolume.value}`];
//     let str = JSON.stringify(array);
//     localStorage.setItem('car', str);
// }
