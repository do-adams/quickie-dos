'use strict';

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	devtool: 'nosources-source-map',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: false
            }
          },
          {
            loader: 'css-loader', 
            options: {
              sourceMap: false
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
              sourceMap: false
            }
          },
          {
            loader: 'css-loader', 
            options: {
              sourceMap: false
            }
          },  
          {
            loader: 'sass-loader', 
            options: {
              sourceMap: false
            }
          }]
        }
		]
	}
});
