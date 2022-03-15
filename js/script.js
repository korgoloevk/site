/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ]
};

let adv = document.querySelector(".promo__adv"),
    genre = document.querySelector(".promo__genre"),
    backgroundFilm = document.querySelector(".promo__bg"),
    promoInteractiv = document.querySelectorAll(".promo__interactive-item"),
    moviesList = movieDB.movies.sort();

while (adv.firstChild){
    adv.firstChild.remove();
}

genre.textContent = "Драма";
backgroundFilm.style.backgroundImage = "url('img/bg.jpg')";

promoInteractiv.forEach((item, i) => {
    item.textContent = `${i + 1}. ${moviesList[i]}`;
});

// for (let i = adv.length - 1; i > 0; i--){
//     adv[i].remove()
// }

// for (let i = adv.length - 1; i > 0; i--){
//     adv[i].remove()
// }


// function advRemove(NodeArray){
//     while (NodeArray.length > 1){
//         NodeArray[0].remove()
//     }
// }