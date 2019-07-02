'use strict';

const path = require('path');
const DefinePlugin = require('webpack').DefinePlugin;

module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai-sinon'],

    client: {
      mocha: {
        ui: 'bdd'
      }
    },

    files: ['test/index.js'],

    preprocessors: {
      'test/index.js': ['webpack', 'sourcemap']
    },

    webpack: {
      devtool: 'inline-cheap-module-source-map',
      watch: true,
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
          {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
          }
        ]
      },

      plugins: [
        new DefinePlugin({
          __API_URL__: JSON.stringify('http://localhost:4000')
        })
      ],

      resolve: {
        alias: {
          app: path.join(__dirname, 'app'),
          test: path.join(__dirname, 'test')
        },
        extensions: ['.js', '.json', '.jsx']
      }
    },

    webpackMiddleware: {
      stats: 'minimal'
    },

    reporters: ['dots'],

    port: 9876,

    colors: true,

    autoWatch: true,

    browsers: ['ChromeHeadless'],

    singleRun: false
  });
};
