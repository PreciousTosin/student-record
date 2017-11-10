import path from 'path';
import webpack from 'webpack';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


export default {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './source/index',
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('styles.css'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../views/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx|.js?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, '../source'),
        exclude: /node_modules/,
        options: {
          presets: ['latest', 'react'],
        },
      },
      {
        rules: [
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: 'css-loader',
            }),
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 },
          },
          'image-webpack-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['ts', '.js', '.jsx'],
  },
};
