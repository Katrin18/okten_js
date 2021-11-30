// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// function User(id, name, username, email, address, geo, phone, website, company) {
//     this.id = id;
//     this.name = name;
//     this.username = username;
//     this.email = email;
//     this.address = address;
//     this.geo = geo;
//     this.phone = phone;
//     this.website = website;
//     this.company = company;
// }
//
//
// let user = new User(1,
//     'Leanne Graham',
//     'Bret',
//     'Sincere@april.biz',
//     {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874'
//     },
//     {
//         lat: '-37.3159',
//         lng: '81.1496'
//     },
//     '1-770-736-8031 x56442',
//     'hildegard.org',
//     {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//
//     });
//
// console.log(user);

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }


// function Tag(titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }
//
// let TagA = new Tag('<a>', 'Для создания ссылок', [{
//     name: 'accesskey',
//     actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'
// }, {
//     titleOfAttr: 'coords',
//     actionOfAttr: 'Устанавливает координаты активной области.'
// }]);
// console.log(TagA);
//
// let TagDiv = new Tag('<div>', 'Предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
//     [{
//         name: 'align',
//         actionOfAttr: 'Задает выравнивание содержимого тега <div>.'
//     }, {
//         titleOfAttr: 'title',
//         actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'
//     }]);
// console.log(TagDiv);
//
// let TagH1 = new Tag('<h1>', 'Представляет собой наиболее важный заголовок первого уровня.',
//     [{name: 'align', actionOfAttr: 'Определяет выравнивание заголовка..'}]);
// console.log(TagH1);
//
// let TagSpan = new Tag('<span>', 'Предназначен для определения строчных элементов документа',
//     [{
//         name: 'accesskey',
//         actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'
//     }, {
//         titleOfAttr: 'contextmenu',
//         actionOfAttr: 'Устанавливает контекстное меню для элемента.'
//     }]);
// console.log(TagSpan);
//
// let TagInput = new Tag('<input>', 'Позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем',
//     [{
//         name: 'alt',
//         actionOfAttr: 'Альтернативный текст для кнопки с изображением.'
//     }, {
//         titleOfAttr: 'border',
//         actionOfAttr: 'Толщина рамки вокруг изображения.'
//     }]);
// console.log(TagInput);
//
// let TagForm = new Tag('<form>', ' Устанавливает форму на веб-странице',
//     [{
//         name: 'enctype',
//         actionOfAttr: 'Способ кодирования данных формы.'
//     }, {
//         titleOfAttr: 'method',
//         actionOfAttr: 'Метод протокола HTTP.'
//     }]);
// console.log(TagForm);
//
// let TagOption = new Tag('<option>', 'Определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. ',
//     [{
//         name: 'label',
//         actionOfAttr: 'Указание метки пункта списка.'
//     }, {
//         titleOfAttr: 'selected',
//         actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'
//     }]);
// console.log(TagOption);
//
// let TagSelect = new Tag('<select>', 'Позволяет создать элемент интерфейса в виде раскрывающегося списка.',
//     [{
//         name: 'size',
//         actionOfAttr: 'Количество отображаемых строк списка.'
//     }, {
//         titleOfAttr: 'form',
//         actionOfAttr: 'Связывает список с формой.'
//     }]);
// console.log(TagSelect);


