"use strict";
let numberOfFilms;
const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
  start: function () {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (
      numberOfFilms == "" ||
      numberOfFilms == null ||
      isNaN(numberOfFilms) ||
      numberOfFilms < 0 ||
      !Number.isFinite(numberOfFilms)
    ) {
      console.log("Ошибка ввода");
      numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },

  rememberMyFilms: function () {
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
        this.movies[film] = score;
      } else {
        console.log("Ошибка, повторите ввод");
        i--;
      }
    }
  },

  detectPersonalLevel: function () {
    if (this.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (10 >= this.count && this.count <= 30) {
      console.log("Вы - классический зритель");
    } else if (this.count > 30) {
      console.log("Вы - киноман!");
    } else {
      console.log("Произошла ошибка");
    }
  },

  writeYourGenres: function () {
    for (let i = 1; i < 2; i++) {
      let answer = prompt(
        `Введите Ваши любимые жанры через запятую`
      ).toLowerCase();
      if (answer === "" || answer == null) {
        console.log("Ошибка: Введены некорректные данные");
        i--;
      } else {
        this.genres = answer.split(", ");
        this.genres.sort();
      }
    }
    this.genres.forEach(function (item, i) {
      console.log(`Любимый жанр ${i + 1} - ${item}`);
    });
  },

  toggleVisibleDB: function () {
    if (this.privat) {
      this.privat = false;
    } else {
      this.privat = true;
    }
  },

  showMyDB: function () {
    if (this.privat) {
      console.log("privat = true");
    } else {
      console.log("personalMovieDB: ", this);
    }
  },
};

personalMovieDB.start();
personalMovieDB.count = numberOfFilms;
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleDB();
personalMovieDB.showMyDB();
