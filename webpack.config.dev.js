var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
});

const includePaths = [
  path.resolve(__dirname, 'src'),
];

const baseConfig = require('./webpack.config.base.js');

module.exports = baseConfig({
  entry: [
    'webpack/hot/only-dev-server',
    './public/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: includePaths,
        enforce: 'pre',
        use: [
          {
            loader: 'eslint-loader',
            options: {
              configFile: './.eslintrc',
              emitWarning: true
            }
          }
        ]
      },
      // {
        // test: /\.js$/,
        // include: includePaths,
        // use: [
          // {
            // loader: 'react-hot-loader'
          // }
        // ]
      // }
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig
  ]
});
