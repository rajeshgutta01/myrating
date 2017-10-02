import thunkify from 'thunkify';
import Rating from '~/src/app/models/rating';

export function *show (next) {
  const { movie_id } = this.params;
  const rating = new Rating(this.db);
  
  const ratings = yield rating.findAll({
    where: {
      movie_id
    }
  });

  let totalCount = 0;
  ratings.forEach((header, index) => {
    totalCount += header.rating;
  });

  const movieRating = totalCount/ratings.length;
  this.status = 200;
  this.body = { movieRating };
}

export function *create (next) {
  const { body: { movie_id, user_rating } } = this.request;
  const rating = new Rating(this.db);

  const response = yield rating.create({
    movie_id,
    rating: user_rating
  });

  this.status = 200;
  this.body = "Rating Successfully Created";
}
