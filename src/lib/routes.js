import KoaRouter from 'koa-router';
import * as MoviesController from '~/src/app/controllers/movies_controller';
import * as RatingsController from '~/src/app/controllers/ratings_controller';

const Router = KoaRouter();

// Router.all('*', helper.requireToutapp);
// Delivery
Router.get('/movies', MoviesController.show);
Router.post('/movies', MoviesController.create);

Router.get('/ratings/:movie_id', RatingsController.show);
Router.post('/ratings', RatingsController.create);

export default Router;
