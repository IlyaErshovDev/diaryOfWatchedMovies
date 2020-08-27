'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
if (numberOfFilms < 0) {
  console.log("Ошибка ввода");
  const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
} else if (numberOfFilms == 0) {
  console.log("Мир кинематографа велик! Скорее познакомьтесь с ним и возвращайтесь! =)");
} else {
  const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
  };

  for (let i = 0; i < 2; i++) {
    const film = prompt('Один из последних просмотренных фильмов?', ''),
      score = prompt('На сколько вы оцените его?', '');

    if (film != null && score != null && film != '' && score != '' && film.length < 50) {
      personalMovieDB.movies[film] = score;
    } else {
      console.log('Ошибка, повторите ввод');
      i--;
    }


  }

  console.log('personalMovieDB: ', personalMovieDB);
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (10 >= personalMovieDB.count && personalMovieDB.count <= 30) {
    console.log('Вы - классический зритель');
  } else if (personalMovieDB.count > 30) {
    console.log('Вы - киноман!');
  } else {
    console.log("Произошла ошибка");
  }
}