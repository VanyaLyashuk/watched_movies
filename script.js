'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

for (let i = 0; i < 2; i++) {
  const lastMovie = prompt('Один из последних просмотренных фильмов?', '');
  const lastMovieRate = prompt('На сколько оцените его?', '');

  if (lastMovie != '' || lastMovieRate != '' ||
    lastMovie != null || lastMovieRate != null ||
    lastMovie.length < 50) {
    personalMoviesDB.movies[lastMovie] = lastMovieRate;
  } else {
    i--;
  }
}

if (personalMoviesDB.count < 10) {
  alert('Просмотрено довольно мало фильмов');
} else if (personalMoviesDB.count >= 10 &&
  personalMoviesDB.count < 30) {
  alert('Вы классный зритель');
} else {
  alert('Вы киноман');
}

console.log(personalMoviesDB);