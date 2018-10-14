'use strict';

global.rootRequire = name => require(`${__dirname}/${name}`);

require('dotenv').config();

const Koa = require('koa');
const app = new Koa();

const logger = require('koa-logger');

if (process.env.NODE_ENV !== 'production') {
	app.use(logger());
}

app.use(async ctx => {
	ctx.body = 'Hello World!';
});

module.exports = app;