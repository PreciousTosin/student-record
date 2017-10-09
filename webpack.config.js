import path from 'path';
import webpack from 'webpack';

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './source/index'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      tests: /\.js?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'source'),
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
