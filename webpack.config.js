'use strict';

const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
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
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader', options: {
              sourceMap: true
            }
          },  
          {
            loader: 'sass-loader', options: {
              sourceMap: true
            }
          }]
        }]
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].css',
        })
      ],
      optimization: {
        splitChunks: {
          cacheGroups: {
            styles: {
              name: 'styles',
              test: /\.css$/,
              chunks: 'all',
              enforce: true
            }
          }
        }
      }
    };
    