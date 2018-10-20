'use strict';

const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;

const userService = rootRequire('bl/services/UserService');
const userPassportConfig = userService.getPassportConfig();

passport.use(new LocalStrategy(userPassportConfig.authenticate()));

passport.serializeUser(userPassportConfig.serializeUser());

passport.deserializeUser(userPassportConfig.deserializeUser());