require('dotenv').load();

const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const deployEnv = process.env.DEPLOY_ENV || 'development';
const stringify = JSON.stringify;

module.exports = function(env) {
  return {
    entry: {
      app: './app',
    },

    output: {
      chunkFilename: '[name]-[chunkhash].js',
      filename: '[name].js',
      path: path.join(__dirname, 'dist'),
      publicPath: '/'
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader?',
          options: {
            cacheDirectory: true
          }
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader', 'sass-loader']
          })
        }
      ]
    },

    resolve: {
      alias: {
        app: path.join(__dirname, 'app')
      },
      extensions: ['.js', '.json', '.jsx']
    },

    devServer: {
      contentBase: './public',
      historyApiFallback: true,
      publicPath: '/',
      stats: 'errors-only'
    },

    devtool: 'inline-source-map',

    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: 'public/index.html',
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': stringify(
          deployEnv === 'development' ? deployEnv : 'production'
        ),
        __API_URL__: stringify(process.env.API_URL)
      }),
      new ExtractTextPlugin({
        filename: '[name].css'
      }),
    ]
  }
};
