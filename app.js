'use strict';

global.rootRequire = name => require(`${__dirname}/${name}`);

require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const logger = require('koa-logger');

if (process.env.NODE_ENV !== 'production') {
	app.use(logger());
}

router.get('/', async ctx => {
	ctx.body = 'Hello World!';
});

app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;