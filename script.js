'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

for(let i = 0; i < 2; i++) {
  const lastMovie = prompt('Один из последних просмотренных фильмов?', '');
  const lastMovieRate = prompt('На сколько оцените его?', '');

  personalMoviesDB.movies[lastMovie] = lastMovieRate;
}

console.log(personalMoviesDB);