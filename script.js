'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while(numberOfFilms == '' || 
        numberOfFilms == null || 
        isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}
start();

const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

function rememberMyFilms() {
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
}
rememberMyFilms();

function detectPersonalLevel() {
  if (personalMoviesDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
  } else if (personalMoviesDB.count >= 10 &&
    personalMoviesDB.count < 30) {
    alert('Вы классный зритель');
  } else {
    alert('Вы киноман');
  }
}
detectPersonalLevel();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMoviesDB.genres.push( prompt(`Ваш любимый жанр под номером: ${i}`));
  }
}
writeYourGenres();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMoviesDB);
  }
}
showMyDB(personalMoviesDB.private);