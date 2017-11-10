import path from 'path';
import webpack from 'webpack';


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
  ],
  module: {
    rules: [{
      test: /\.jsx|.js?$/,
      loader: 'babel-loader',
      include: path.join(__dirname, '../source'),
      exclude: /node_modules/,
      options: {
        presets: ['latest', 'react'],
      },
    }],
  },
  resolve: {
    extensions: ['ts', '.js', '.jsx'],
  },
};
