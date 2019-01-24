'use strict';

global.rootRequire = name => require(`${__dirname}/${name}`);

require('dotenv').config();

const path = require('path');

// MONGOOSE SETUP

const mongoose = require('mongoose');

const dbUrl = process.env.DATABASE_URL || 'mongodb://localhost/quickie_dos';
mongoose.connect(dbUrl, { useNewUrlParser: true }, function(err) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}
});

// INITIAL KOA SETUP

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

// KOA MIDDLEWARE SETUP

const logger = require('koa-logger');
const helmet = require('koa-helmet');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const override = require('koa-override');
const session = require('koa-session');
const flash = require('koa-better-flash');
const passport = require('koa-passport');

if (process.env.NODE_ENV !== 'production') {
	app.use(logger());
}

app.use(helmet());
app.use(serve(path.join(__dirname, 'public')));
app.use(bodyParser());
app.use(override());

// KOA SESSION MIDDLEWARE

app.keys = [process.env.SESSION_KEY || 'secret session development key'];

app.use(session({
	key: 'koa:sess',
  maxAge: 86400000,
  autoCommit: true,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
	renew: false,
}, app));

app.use(flash());

// KOA PASSPORT MIDDLEWARE

rootRequire('config/passport');

app.use(passport.initialize());
app.use(passport.session());

// KOA ROUTES SETUP

const indexRoutes = rootRequire('routes/index');

app.use(indexRoutes.routes());

module.exports = app;