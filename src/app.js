import 'babel-polyfill';
import koa from 'koa';
import bodyParser from 'koa-bodyparser';
import koaLogger from 'koa-logger';
import mysql from 'mysql';
import Sequelize from 'sequelize';
import Router from '~/src/lib/routes';
import Database from '~/src/lib/database';
const app = new koa();

Database.connect();
app.context.db = Database.client;

app
  .use(koaLogger())
  .use(bodyParser({ formLimit: '73mb', jsonLimit: '73mb', textLimit: '73mb', strict: false  }))
  .use(Router.routes())
  .use(Router.allowedMethods());

Router.get('/', function (req, res) {
   this.body = 'Welcome to MyRating';
})

app.env = process.env.NODE_ENV || 'development';

app.listen(process.env.PORT || 3000);

export default app;
