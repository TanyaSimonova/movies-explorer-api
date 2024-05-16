# Movies-explorer-api 🎞
Backend приложения для поиска фильмов. С его помощью пользователи могут искать фильмы по названию и длительности, а также добавлять понравившиеся фильмы в свой список.  
[Ссылка на готовый сайт](https://movies-explorer.pnk.nomoredomainswork.ru) | [Ссылка на макет в Figma](https://www.figma.com/file/6FMWkB94wE7KTkcCgUXtnC/%D0%94%D0%B8%D0%BF%D0%BB%D0%BE%D0%BC%D0%BD%D1%8B%D0%B9-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82?type=design&node-id=891-3857&mode=design&t=LsDBX72q3i2a6n2t-0)

## Структура проекта 📖

* [Movies-explorer-front (frontend)](https://github.com/TanyaSimonova/movies-explorer-front.git)  
* Movies-explorer-api (backend)

## Реализовано в проекте ✍

* вёрстка компонентов JSX React;
* асинхронные запросы к API;
* кастомная валидация введенных пользователем данных;
* регистрация, аутентификация и авторизация пользователя;
* роуты для авторизованных и неавторизованных пользователей;
* поиск фильмов по названию и длине;
* сохранение данных поисковика при перезагрузке в localStorage;
* отображение необходимого количества фильмов в зависимости от ширины экрана;
* добавление и удаление фильмов из избранного;
* первичная валидация данных библиотекой Joi;
* основная валидация перед записью в БД схемой и моделью Mongoose;
* логирование;
* структура проекта по BEM; 

## Технологии 🛠

  <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" title="React" alt="React" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/express/express-original-wordmark.svg" title="Express" alt="JavaScript" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/mongoose/mongoose-original.svg" title="Mongoose" alt="Mongoose" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/mongodb/mongodb-original.svg" title="MongoDB" alt="MongoDB" width="40" height="40"/>&nbsp;

## Инструкция по запуску 🏁

1. Склонируйте репозиторий:

  ``
  git clone https://github.com/TanyaSimonova/movies-explorer-api.git
  ``

2. Установите зависимости:
   
``
npm install
`` 

3. Убедитесь, что MongoDB в рабочем состоянии;

4. Запустите проект:

``
npm run start
``

## Системные требования ⚙

- Node.js версии 18.16.0
- MongoDB версии 4.4.14 (любая мажорная 4.4.х)
