// "use strict";

let number0films;
function start() {
  number0films = +prompt("Сколько фильмов вы уже посмотрели?", " ");
  while (number0films == "" || number0films == null || isNaN(number0films)) {
    number0films = +prompt("Сколько фильмов вы уже посмотрели?", " ");
  }
}
start();
const personalMoviesDB = {
  count: number0films,
  movies: {},
  actors: {},
  geners: [],
  privat: false,
};

// const a = prompt("Одина из посл фильмов?", " ");
// const b = prompt("На сколько его оцените?", " ");
// const c = prompt("Одина из посл фильмов?", " ");
// const d = prompt("На сколько его оцените", " ");

// personalMoviesDB.movies[a] = b;
// personalMoviesDB.movies[c] = d;

// автоматизировать вопросы про фильм с помощью циклов

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Одина из посл фильмов?", " ");
    const b = prompt("На сколько его оцените?", " ");
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMoviesDB.movies[a] = b;
      console.log("Daa");
    } else {
      console.log("error");
      i--;
    }
  }
}
rememberMyFilms();
//сделать так , чтобы пользователь не мог оставить ответ в виде пустой строки, отменить ответ или ввести название длиннее 50 символов. Если это происходит возвращаем пользователя к вопросам опять. К любой строке можно осбратиться str.length.

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

function detectPersonalLevel() {
  if (personalMoviesDB.count < 10) {
    console.log("Просмотрено мало фильмов");
  } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMoviesDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMoviesDB);
  }
}
showMyDB(personalMoviesDB.privat);

function writeYourGeners() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMoviesDB.geners[i - 1] = genre;
  }
}
writeYourGeners();

// или без промежуточной переменной
function writeYourGeners() {
  for (let i = 1; i <= 3; i++) {
    personalMoviesDB.geners[i - 1] = prompt(
      `Ваш любимый жанр под номером ${i}`
    );
  }
}
writeYourGeners();
