alert(1);
const number0films = +prompt("Сколько фильмов?", " ");

const personalMoviesDB = {
  count: number0films,
  movies: {},
  actors: {},
  geners: [],
  privat: false,
};

const a = prompt("Одина из посл фильмов", " ");
const b = prompt("На сколько его оцените?", " ");
const c = prompt("Одина из посл фильмов", " ");
const d = prompt("На сколько его оцените", " ");

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);
