const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const lastMovie = prompt('Один из просмотренных фильмов?', ''),
      ratingOfFilm = +prompt('На сколько оцените его?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
personalMovieDB.movies[lastMovie] = ratingOfFilm;

console.log(personalMovieDB);
