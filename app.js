'use strict';

global.rootRequire = name => require(`${__dirname}/${name}`);

require('dotenv').config();

const path = require('path');
const Koa = require('koa');
const app = new Koa();
const render = require('koa-ejs');

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'layouts/index',
  viewExt: 'ejs',
  cache: false,
  debug: process.env.NODE_ENV !== 'production' ? true : false
});

const logger = require('koa-logger');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const override = require('koa-override');

if (process.env.NODE_ENV !== 'production') {
	app.use(logger());
}

app.use(serve(path.join(__dirname, 'public')));
app.use(bodyParser());
app.use(override());

const indexRoutes = rootRequire('routes/index');

app.use(indexRoutes.routes());

module.exports = app;