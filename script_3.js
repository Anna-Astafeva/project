// "use strict";

const personalMoviesDB = {
  count: 0,
  movies: {},
  actors: {},
  geners: [],
  privat: false,
  start: function () {
    personalMoviesDB.count = +prompt("Сколько фильмов вы уже посмотрели?", " ");
    while (
      personalMoviesDB.count == "" ||
      personalMoviesDB.count == null ||
      isNaN(personalMoviesDB.count)
    ) {
      personalMoviesDB.count = +prompt(
        "Сколько фильмов вы уже посмотрели?",
        " "
      );
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Одина из посл фильмов?", " ").trim();
      const b = prompt("На сколько его оцените?", " ").trim();
      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMoviesDB.movies[a] = b;
        console.log("Daa");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMoviesDB.count < 10) {
      console.log("Просмотрено мало фильмов");
    } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMoviesDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMoviesDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMoviesDB.privat) {
      personalMoviesDB.privat = false;
    } else {
      personalMoviesDB.privat = true;
    }
  },
  writeYourGeners: function () {
    for (let i = 1; i <= 2; i++) {
      // let genre = prompt(`Ваш любимый жанр под номером ${i}`);
      // if (genre === "" || genre == null) {
      //   console.log("Вы ввели некорректные данные");
      //   i--;
      // } else {
      //   personalMoviesDB.geners[i - 1] = genre;
      // }
      let genres = prompt(`Ваш ваши любимые жанры через зпт`).toLowerCase();
      if (genres === "" || genres == null) {
        console.log("Вы ввели некорректные данные");
        i--;
      } else {
        personalMoviesDB.geners = genres.split(", ");
        personalMoviesDB.geners.sort();
      }
    }

    personalMoviesDB.geners.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
};
