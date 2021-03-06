'use strict';

const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'client', 'index.js'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public', 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [
					/node_modules/
				],
				use: [
					{ loader: 'babel-loader' }
				]
			},
			{
				test: /\.pug$/,
				loader: 'pug-plain-loader'
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js' // set alias for full build of Vue
		}
	},
	plugins: [
		new CleanWebpackPlugin([
			path.resolve(__dirname, 'public', 'dist')
		]),
		new VueLoaderPlugin()
	]
};
