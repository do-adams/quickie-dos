'use strict';

global.rootRequire = name => require(`${__dirname}/${name}`);

require('dotenv').config();

const path = require('path');

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const render = require('koa-ejs');

const logger = require('koa-logger');

if (process.env.NODE_ENV !== 'production') {
	app.use(logger());
}

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'layouts/index',
  viewExt: 'ejs',
  cache: false,
  debug: process.env.NODE_ENV !== 'production' ? true : false
});

router.get('/', async ctx => {
	await ctx.render('hello');
});

app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;