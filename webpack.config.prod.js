const webpack = require('webpack');
const path = require('path');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const baseConfig = require('./webpack.config.base.js');

module.exports = baseConfig({
  entry: [ './entry.js' ],
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.html',
  },
  plugins: [
    new OptimizeCSSAssetsPlugin(),
    // new webpack.optimize.UglifyJsPlugin({
      // minimize: false,
      // mangle: false,
      // compress: {
        // warnings: false
      // },
      // sourceMap: true
    // })
  ]
});
