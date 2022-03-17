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

let advBlock = document.querySelector('.promo__adv'),
    movieList = movieDB.movies,
    pageFilmList = document.querySelector('.promo__interactive-list'),
    pageForm = document.querySelector('form.add'),
    formInput = pageForm.querySelector('.adding__input'),
    formCheckbox = pageForm.querySelector('input[type="checkbox"]');

deleteAdv(advBlock);
pagesChange('/img/bg.jpg', "Драма");
generateFilmList(movieList, pageFilmList);

pageForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    addFilm(formInput.value, movieList);
    pageForm.reset();
});

pageFilmList.addEventListener('click', function(e){
    let target = e.target;
    if (target && target.className === 'delete'){
        deleteFilm(target);
    }
});

function deleteFilm(film){
    film.parentNode.remove();
    let number = parseInt(film.parentNode.textContent);
    delete movieList[number - 1];
    generateFilmList(movieList, pageFilmList);
}

function deleteAdv(advList){
    while(advList.firstChild){
        advList.firstChild.remove();
    }
}

function pagesChange(background, genre){
    document.querySelector('.promo__bg').style.backgroundImage = `url(${background})`;
    document.querySelector('.promo__genre').textContent = genre;
}

function generateFilmList(movieArray, pageList){
    pageList.innerHTML = '';
    movieArray.sort().forEach((item, i) =>{
        let insertEl = `<li class="promo__interactive-item">${i + 1}. ${item}
        <div class="delete"></div>
        </li>`;
        pageList.insertAdjacentHTML('beforeend', insertEl);
    });
}

function addFilm(film, targetArray){
    film = film.substring(0, 1).toUpperCase() + film.substring(1);
    if (film.length > 21) {
        film = film.substring(0, 22) + '...';
    }
    if (film) {
        targetArray.push(film);
    }
    if (formCheckbox.checked) {
        console.log('Добавляем любимый фильм');
    }
    generateFilmList(targetArray, pageFilmList);
}

// let adv = document.querySelector(".promo__adv"),
//   genre = document.querySelector(".promo__genre"),
//   backgroundFilm = document.querySelector(".promo__bg"),
//   promoList = document.querySelector(".promo__interactive-list"),
//   moviesList = movieDB.movies.sort(),
//   addInput = document.querySelector(".adding__input"),
//   addForm = document.querySelector("form.add"),
//   deleteBtn = document.querySelectorAll('.delete'),
//   likeFilm = document.querySelector('input[type=checkbox]');

// let promoInteractiv = function () {
//   return document.querySelectorAll(".promo__interactive-item");
// };

// genre.textContent = "Драма";
// backgroundFilm.style.backgroundImage = "url('img/bg.jpg')";

// addForm.addEventListener("submit", () => {
//   if (addInput.value !== "") {
//     let inputText = addInput.value;
//     inputText = [...inputText];
//     inputText[0] = inputText[0].toUpperCase();
//     inputText = inputText.join("");
//     moviesList.push(inputText);
//     moviesList.sort();
//     addInput.value = "";
//     if (likeFilm.checked === true){
//         console.log('Добавляем любимый фильм');
//         likeFilm.checked = false;
//     }
//     }

//   createMovieList(promoInteractiv(), moviesList, promoList, pushItems);

// });


// createMovieList(promoInteractiv(), moviesList, promoList, pushItems);

// while (adv.firstChild) {
//   adv.firstChild.remove();
// }

// function deleteFilm(){
//     this.parentNode.remove();
// }

// function createMovieList(originalList, targetList, result, callback) {
//   originalList.forEach((item) => {item.remove();});
//   callback(targetList, result);
// }

// function pushItems(targetList, result) {
//   targetList.forEach((item) => {
//     result.insertAdjacentHTML(
//       "beforeend",
//       `<li class="promo__interactive-item">${item}
//         <div class="delete"></div>
//         </li>`
//     );
//   });
//   addDeleteFnct();
//   function addDeleteFnct(){
//       document.querySelectorAll('.delete').forEach(item =>{item.addEventListener('click', deleteFilm);});
//   }
// }

