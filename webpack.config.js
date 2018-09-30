'use strict';

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
	},
	mode: process.env.NODE_ENV || 'development',
	devtool: 'source-map',
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
      }
		]
	}
};
