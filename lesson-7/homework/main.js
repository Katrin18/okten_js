// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// function User (id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

// створити пустий масив, наповнити його 10 об'єктами new User(....)

// let arrayUser = [
//     new User ('1','Katya','Trofymyuk','dhjska@gmail.com','380732076741'),
//     new User ('96','Olia','Anertyukol','kjhgfd@email.com','38096356275'),
//     new User ('18','Vika','Lolpjuio','jhygfd@gmail.com','4444444'),
//     new User ('2','Ivan','Trathj','nhbgf@gmail.com','968525525'),
//     new User ('4','Denys','OLpl','hggfe654@gmail.com','380964414'),
//     new User ('6','Petro','ABenl','dhbgfda@gmail.com','38052555221'),
//     new User ('75','Pavlo','Magnus','ololo@gmail.com','1441963'),
//     new User ('52','Sasha','Anertyuk','asadf432@gmail.com','380754754444'),
//     new User ('11','Masha','LOLo','jhgfds09a@gmail.com','5457457'),
//     new User ('27','Vasya','Onopko','lololool@gmail.com','38085252741'),
// ];
//
//
// console.log(arrayUser);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filterArr = arrayUser.filter(value => {
//     return value.id % 2 === 0;
// });
// console.log(filterArr);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sortArr = arrayUser.sort((u1,u2)=>{
//     return u1.id - u2.id;
// });
// console.log(sortArr);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order(поле є масивом
// зі списком товарів)

// class Client {
// constructor (id,name,surname,email,phone,order) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// };
// }

// створити пустий масив, наповнити його 10 об'єктами Client

// let arrayClient = [
//     new Client(15,'Vaser','Joinh','hsjk@email.com',36545263,['kol','lol']),
//     new Client (7,'Vaser','Joinh','loll52@email.com',78653,['lkj','lol','stt']),
//     new Client (82,'Blop','Asdfg','lkjhgfd765@email.com',3675463,['bv','ltre']),
//     new Client (14,'Resar','Jolk','fvds1234@email.com',654,['jhgfd']),
//     new Client (36,'Nilop','Holol','lkjhg543@email.com',36545263,['kl','lol','kopf']),
//     new Client (95,'Polio','Daser','hgf@email.com',36545263,['kol','lol']),
//     new Client (1,'Laserr','During','hsjk@email.com',36545263,['kol','lol']),
//     new Client (10,'Jokl','Kolert','hsjk@email.com',36545263,['kol','lol']),
//     new Client (41,'Vkgr','Saer','hsjk@email.com',36545263,['lop','lol']),
//     new Client (32,'Jgahj','Cared','hsjk@email.com',36545263,['sater','jhfag','yhj']),
// ];
//
// console.log(arrayClient);

// - Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let sortClient = arrayClient.sort((c1,c2) => {
//     return c1.order.length - c2.order.length;
// });
// console.log(sortClient);
