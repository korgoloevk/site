/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

let adv = document.querySelector(".promo__adv"),
  genre = document.querySelector(".promo__genre"),
  backgroundFilm = document.querySelector(".promo__bg"),
  promoList = document.querySelector(".promo__interactive-list"),
  moviesList = movieDB.movies.sort(),
  addInput = document.querySelector(".adding__input"),
  addBtn = document.querySelector(".add button"),
  deleteBtn = document.querySelectorAll('.delete'),
  likeFilm = document.querySelector('input[type=checkbox]');

let promoInteractiv = function () {
  return document.querySelectorAll(".promo__interactive-item");
};

genre.textContent = "Драма";
backgroundFilm.style.backgroundImage = "url('img/bg.jpg')";

addBtn.addEventListener("click", () => {
  if (addInput.value !== "") {
    let inputText = addInput.value;
    inputText = [...inputText];
    inputText[0] = inputText[0].toUpperCase();
    inputText = inputText.join("");
    moviesList.push(inputText);
    moviesList.sort();
    addInput.value = "";
    if (likeFilm.checked === true){
        console.log('Добавляем любимый фильм');
        likeFilm.checked = false;
    }
    }

  createMovieList(promoInteractiv(), moviesList, promoList, pushItems);

});


createMovieList(promoInteractiv(), moviesList, promoList, pushItems);

while (adv.firstChild) {
  adv.firstChild.remove();
}

function deleteFilm(){
    this.parentNode.remove();
}

function createMovieList(originalList, targetList, result, callback) {
  originalList.forEach((item) => {item.remove();});
  callback(targetList, result);
}

function pushItems(targetList, result) {
  targetList.forEach((item) => {
    result.insertAdjacentHTML(
      "beforeend",
      `<li class="promo__interactive-item">${item}
        <div class="delete"></div>
        </li>`
    );
  });
  addDeleteFnct();
  function addDeleteFnct(){
      document.querySelectorAll('.delete').forEach(item =>{item.addEventListener('click', deleteFilm);});
  }
}

