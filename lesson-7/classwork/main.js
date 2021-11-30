// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// і додає його в поточний об'єкт car

// function Car(model, zavod, year, speed, volume) {
//     this.model = model;
//     this.zavod = zavod;
//     this.year = year;
//     this.speed = speed;
//     this.volume = volume;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     };
//     this.info = function () {
//         for (const key in this) {
//             if (typeof this[key] !== 'function')
//                 console.log(`${key} - ${this[key]}`)
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.speed = this.speed + newSpeed;
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     };
// }
//
// let newCar = new Car('Mersedes', 'Italia', 2021, 320, 3.5);
//
// newCar.drive();
// newCar.info();
// newCar.increaseMaxSpeed(10);
// newCar.changeYear(2020);
// newCar.addDriver({name:'Katrin',age:20});
// console.log(newCar);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, zavod, year, speed, volume) {
//         this.model = model;
//         this.zavod = zavod;
//         this.year = year;
//         this.speed = speed;
//         this.volume = volume;
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//         };
//         this.info = function () {
//             for (const key in this) {
//                 if (typeof this[key] !== 'function')
//                     console.log(`${key} - ${this[key]}`)
//             }
//         };
//         this.increaseMaxSpeed = function (newSpeed) {
//             this.speed = this.speed + newSpeed;
//         };
//         this.changeYear = function (newValue) {
//             this.year = newValue;
//         };
//         this.addDriver = function (driver) {
//             this.driver = driver;
//         };
//     }
// }
//
// let newCar = new Car('Mersedes', 'Italia', 2021, 320, 3.5);
//
// newCar.drive();
// newCar.info();
// newCar.increaseMaxSpeed(10);
// newCar.changeYear(2020);
// newCar.addDriver({name: 'Katrin', age: 20});
// console.log(newCar);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


// function Popelushka(name, age, size) {
//     this.name = name;
//     this.age = age;
//     this.size = size;
// }
//
// let array = [
//     new Popelushka('Kateryna', 20, 38),
//     new Popelushka('Anastasia', 19, 36),
//     new Popelushka('Viktoria', 21, 37),
//     new Popelushka('Liliana', 25, 35),
//     new Popelushka('Tanya', 26, 39),
//     new Popelushka('Olena', 19, 35),
//     new Popelushka('Antonina', 18, 36),
//     new Popelushka('Vasylyna', 22, 35),
//     new Popelushka('Masha', 23, 38),
//     new Popelushka('Iryna', 24, 39),
// ];
//
// class Prince {
//     constructor(name, age, shoe) {
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe;
//     }
// }
//
// const prince = new Prince('Vasia', 28, 37);
//
// const func = (array, prince) => {
//     for (const item of array) {
//         if (item.size === prince.shoe) {
//             return `Populushka name is ${item.name}`
//         }
//     }
// };
// console.log(func(array, prince));
//
// const find = array.find((item) => item.size === prince.shoe);
// console.log(find);
