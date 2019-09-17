const path = require('path');
const autoprefixer = require('autoprefixer');
const flexBugs = require('postcss-flexbugs-fixes');
const mqpacker = require("css-mqpacker");
const cssnano = require('cssnano');

module.exports = {
  entry: ['./src/js/app.js', './src/scss/styles.scss'],
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'js/app.bundle.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
          loader: 'file-loader',
          options: {
            name: 'css/styles.bundle.css',
          },
        },
        {
          loader: 'extract-loader'
        },
        {
          loader: 'css-loader'
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              flexBugs(),
              autoprefixer(),
              cssnano(),
              mqpacker({ sort: true }),
            ]
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: ['./node_modules']
            }
          }
        },
      ]
    }, {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }, {
      test: /\.svg$/,
      use: [{
          loader: 'svg-sprite-loader',
        },
        'svgo-loader'
      ]
    }]
  },
};
