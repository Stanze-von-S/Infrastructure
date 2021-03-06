const objectApi = new Api(configApi);
const addFormButton = document.querySelector('.user-info__button');
const addFormUserButton = document.querySelector('.user-info__button-edit');
const placePopup = new PopupFormPlace('.popup_new-place', objectApi);
const jobPopup = new PopupFormEdit('.popup_new-form', objectApi);
const profileName = document.querySelector('.user-info__name');
const profileJob = document.querySelector('.user-info__job');
const profileImage = document.querySelector('.user-info__photo');
const placesList = new CardList('.places-list', objectApi);
// Принимаем данные от сервера по профилю.
getProfile(objectApi, profileName, profileJob, profileImage);
// Выгружаем карточки с сервера.
placesList.render();

const formImage = new PopupImage('.popup_image');

addFormButton.addEventListener('click', function (event) {
    placePopup.open();
})

addFormUserButton.addEventListener('click', function (event) {
    jobPopup.open();
})
// Я так понял, обязательных заданий - три, их сделал, хотя и не в полном объёме.
// Завтра постараюсь прикрутить класс. Простите, сегодня уже не успеваю,
//  хоть успел сдать до дед-лайна. Ещё вопрос на 55 строке файла functions.js Не пойму.
//  Не подскажете направление поиска? Пробовал найти нужное свойство через 
// console.dir(profileImage), но не разобрался.


/**
* Здравствуйте.
*
* - Ещё вопрос на 55 строке файла functions.js Не пойму.
*  Я думаю что это лучше к наставнику.
https://www.w3schools.com/jsref/prop_style_backgroundimage.asp
*
 *
 * Нужно исправить: Принято называть названия файлов по имени класса,
 * Допустим класс CardList должен лежать в файле CardList.js
 * Класс Popup должен лежать в файле с названием Popup.
 * Когда файлом сотни и тысячи в проекте, проще разобраться где и какой класс лежит
 *
*
* Надо исправить:
* Данные на подобии
* http://95.216.175.5/cohort4/
*'b79170d1-fa09-48c3-8dc3-1be954624527'
* Надо передавать в качестве параметров в класс Api
*
* --------------------------------------------------------------------
* В принципе архитектура более менее, но взаимодействие с классом Api не корректное.
* Сейчас у вас добавился новый класс(модуль), неважно и ваша задача не создавать жесткую связь с другими классами
* Соответственно вам надо пулучать новые карточки, а получать вы можите только передавая сам класс в другие классы, как некое хранилице
 * о котором ничего другие классы не знают.
* Как пример не более:
*
* // Объявляете новый класс
* const api = new Api(config);
*
* // при инициализации класса Card вы передаёте в качестве параметров класс api
* const card = new Card(api); // это для того чтобы вызывая методы лайка, дизлайка, вызывать методы класса api передавая на сервер информацию
*
* // при инициализации класса CardList вы передаёте в качестве параметров класс api
*  const cardList = new CardList(document.querySelector(".places-list"), card, api);
 // это для того чтобы вызывая методы добавления карточек вызывать методы класса api для получения информации на  сервере
*
* // Тоже самое с классом Popup, но там только при изменении профиля, функционал добавления  карточки через Popup остаётся
* // при условии использования класса Card
*
* Это не окончательное ревью. После текущих исправлений, снова пересмотрю работу
*
*/
// Доброе утро. Не успел сделать/переделать всё, что необходимо. Посмотрите, пожалуйста, в правильном ли направлении я двигаюсь. 
// Реализовал класс Api корректно? Переделал класс PopupForm правильно? Долго провозился, на работу нужно уходить уже, классы  
// Card и CardList переделаю к завтрашнему утру. По крайней мере, очень постараюсь. Да, картинка теперь загружается как нужно, 
// спасибо.

/**
 * Здравствуйте
 *
 * Зачем вы дописывайте каждому файлу в котором класс в имени "class" это лишнее
 *
 * Переменную  objApi вы получаете из глобальной области видимости, так делать нельзя
 *
 * -Реализовал класс Api корректно?
 * нет, вы обращаетесь к fetchProfile за классом
 *
  * Самый правильный способ, как пример указан в брифе
  // url лучше передавать при инициализации класса в конструктор
  fetch(`url/cards`, {
    headers: {
   // ключ который надо передавать в параметрах
   authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6'
       }
       })
   .then(res => {
    if (res.ok) {
       return res.json();
       }
       // если ошибка, переходим в catch
     return Promise.reject(`Ошибка: ${res.status
       }`);
       })
   .then((result) => {
       // обрабатываем результат
       // а точнее возвращает результат работы прямо в тот класс откуда вызывали
   })
   .catch((err) => {
   console.log(err); // выведем ошибку в консоль
   });

  * Вызывать же методы класса Api лучше из других классов
  *
 * Доброе утро. Сломал голову. Каким образом, не вызывая Card где-либо, предполагается
 * выложить карточки с сервера? Не понимаю.
 *
 * Я не понимаю, что Вы подразумеваете под фразой
 * "обращаетесь к fetchProfile за классом"? По поводу корректности реализации
 * класса Api.
 *
 *
 */

/**
 * Здравствуйте
 *
 * Надо исправить: Функции fetchProfile и  fetchRender Находятся в глобально области видимости. Так обращаться к функциям из класса нельзя.
 * Можно передать в качестве параметров в метод класса функцию и вызвать её внутри класса.
 * Простым языком, если я возьму ваш класс Api к себе в проект то он будет не самостоятельным, а будет требовать функции
 * о которых я знать не могу.
 *
 *
    Надо исправить : Много иснстансов  new Card нельзя объявлять, если вы не удаляете их при удалении карточки а так же слушатели не удаляете
 *
 */

/**
 * Здравсвуйте.
 * Вы снова делаете реализацию в классе Api.
 * Вы принимаете данные по профилю getProfileApi, передавайте тогда полученные данные в класс или в функцию.
 * Обработка этих данных недопустимо в классе Api
 *
 * Немогу понять, зачем вы складываете в переменную this.list в классе Api, это лишнее. Вы её не используете
 *
 * Выше я писал как грамотно сделать. Вы Вы инициализируете класс Api и передаёте в другие классы где хотите вызвать методы
 * класса Api, а методы вернут результат который вы обработаете
 * Перечитайте, прошу
 * ---- при инициализации класса CardList вы передаёте в качестве параметров класс api
*  ---- const cardList = new CardList(document.querySelector(".places-list"), card, api);
 *
 *
 * Переменная api которую вы передаёте в класс CardList вы не используете, на данный момент.

 *
 */
/**
 * Вы опять выносите из класса Api всё что там должно быть, я про методы editProfileApi, getProfileApi
 *
 * У вас есть автомобиль, Вам ставят задачу привести тарелки из столовой, чтобы помыть их в  посудойке.
 * Класс Api это ваш автомобиль, посудомоечная машина - это класс CardList, тарелки это класс Card
 * Сейчас вы пытаетесь прям с автомобиля загрузить в посудомойку. Хотя автомобиль в реальной жизни ничего не знает о посудомойке
 * тарелки ничего незнают о машине и посудомойке. Любую машину можно поменять, как и посудомойку. Они не связаны между собой.
 * Сейчас у вас класс Api и его методы вы разнесли по кодовой базе, а получив тарелки в не отдаёте их в посудомойку, а пытаетесь сразу загрузить.
 * А теперь представьте что я беру вашу машину(класс Api ) к себе в проект и мне говорят, что там есть три метода, для получения данных.
 * Но вы так же пытаетесь сразу данные записать или обновить прям в методах класса Api( fetchProfile(res, name, about, image) )
 * или пытаетесь записать их в массив (this.list.push(res[i]);)
 *
 * Работа принимается.
 */