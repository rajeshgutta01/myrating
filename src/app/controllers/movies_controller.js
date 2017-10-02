import thunkify from 'thunkify';
import Movie from '~/src/app/models/movie';
import Rating from '~/src/app/models/rating';

export function *show (next) {
  const movie = new Movie(this.db);
  const movies = yield movie.findAll();

  this.status = 200;
  this.body = { movies };
}

export function *create (next) {
  const { body: { name, release_date } } = this.request;
  const movie = new Movie(this.db);

  const response = yield movie.create({
    name,
    release_date
  });

  this.status = 200;
  this.body = "Movie Successfully Created";
}
