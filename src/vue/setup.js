'use strict';

import 'expose-loader?Vue!vue/dist/vue.common';

import Hello from './components/Hello.vue';

window.VueComponents = {
	Hello
};
