// var express = require('express');
// var app = express();
import 'babel-polyfill';
import koa from 'koa';
import bodyParser from 'koa-bodyparser';
import koaLogger from 'koa-logger';
import mysql from 'mysql';
import Sequelize from 'sequelize';
import Router from '~/src/lib/routes';
import Database from '~/src/lib/database';
const app = new koa();

// Database.connect();
// // console.log('start app.context');
// app.context.db = Database.client;
// console.log('done app.context');

app
  .use(koaLogger())
  .use(bodyParser({ formLimit: '73mb', jsonLimit: '73mb', textLimit: '73mb', strict: false  }))
  .use(Router.routes())
  .use(Router.allowedMethods());

// console.log('this.db', this.db);
Router.get('/', function (req, res) {
   this.body = 'Hello MyRating';
})

app.env = process.env.NODE_ENV || 'development';

app.listen(process.env.PORT || 3000);

export default app;
