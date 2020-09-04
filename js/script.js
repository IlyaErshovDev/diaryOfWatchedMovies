"use strict";
let numberOfFilms;
const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms) || numberOfFilms < 0) {
    console.log("Ошибка ввода");
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const film = prompt("Один из последних просмотренных фильмов?", ""),
      score = prompt("На сколько вы оцените его?", "");

    if (
      film != null &&
      score != null &&
      film != "" &&
      score != "" &&
      film.length < 50
    ) {
      personalMovieDB.movies[film] = score;
    } else {
      console.log("Ошибка, повторите ввод");
      i--;
    }
  }
}

function detectPersonalLevel() {

  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (10 >= personalMovieDB.count && personalMovieDB.count <= 30) {
    console.log("Вы - классический зритель");
  } else if (personalMovieDB.count > 30) {
    console.log("Вы - киноман!");
  } else {
    console.log("Произошла ошибка");
  }
}

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр №${i}`);
  }
}

function showMyDB() {
  if (personalMovieDB.privat) {
    console.log("privat = true");
  } else {
    console.log("personalMovieDB: ", personalMovieDB);
  }
}

start();
personalMovieDB.count = numberOfFilms;
rememberMyFilms();
writeYourGenres();
detectPersonalLevel();
showMyDB();