'use strict';

// SCSS
import './scss/main.scss';

// Stimulus
import { Application } from 'stimulus';
import { definitionsFromContext } from 'stimulus/webpack-helpers';

const application = Application.start();
const context = require.context('./controllers', true, /\.js$/);
application.load(definitionsFromContext(context));

// Turbolinks
const Turbolinks = require('turbolinks');
Turbolinks.start();