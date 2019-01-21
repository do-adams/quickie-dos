'use strict';

require('dotenv').config();

const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

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
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new VueLoaderPlugin()
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
      },
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    }
  };
  