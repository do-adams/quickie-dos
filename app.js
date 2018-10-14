'use strict';

global.rootRequire = name => require(`${__dirname}/${name}`);

require('dotenv').config();

const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
	ctx.body = 'Hello World!';
});

module.exports = app;