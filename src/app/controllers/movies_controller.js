import thunkify from 'thunkify';
import Movie from '~/src/app/models/movie';
import Rating from '~/src/app/models/rating';

export function *show (next) {
  const movies = yield Movie.findAll();

  this.status = 200;
  this.body = { movies };
}

export function *create (next) {
  const { body: { name, release_date } } = this.request;

  console.log('create', name, release_date);
  const response = yield Movie.create({
    name,
    release_date
  });

  this.status = 200;
  this.body = response;
}
