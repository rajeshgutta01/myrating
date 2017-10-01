import KoaRouter from 'koa-router';
import * as MoviesController from '~/src/app/controllers/movies_controller';

const Router = KoaRouter();

// Router.all('*', helper.requireToutapp);
// Delivery
Router.get('/movies', MoviesController.show);
Router.post('/movies', MoviesController.create);

export default Router;
