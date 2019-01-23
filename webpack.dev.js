'use strict';

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader', 
            options: {
              sourceMap: true
            }
          }
				]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader', 
            options: {
              sourceMap: true
            }
          },  
          {
            loader: 'sass-loader', 
            options: {
              sourceMap: true
            }
          }]
        }
		]
	}
});
