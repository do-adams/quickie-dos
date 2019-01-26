'use strict';

/**
 * SCSS
 */

import './scss/main.scss';

/**
 * VUE COMPONENTS
 */

import Vue from 'vue';

import Hello from './vue/components/Hello.vue';

window.Vue = Vue;

Vue.component('hello', Hello);
