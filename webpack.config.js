'use strict';

const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

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
      },
      {
				test: /\.css$/,
				use: [
          'style-loader',
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
          'style-loader',
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
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
      ]
    },
    plugins: [
      new VueLoaderPlugin()
    ]
  };
  