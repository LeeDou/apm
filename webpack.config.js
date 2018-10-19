const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/main.js',
  },
  // devServer: {
  //   contentBase: './public',
  //   hot: true
  // },
  // plugins: [
  //   new CleanWebpackPlugin(['public']),
  //   new HtmlWebpackPlugin({
  //     title: 'Hot Module Replacement'
  //   }),
  //   new webpack.NamedModulesPlugin(),
  //   new webpack.HotModuleReplacementPlugin()
  // ],
  plugins: [
    new HtmlWebpackPlugin(),
    
  ],
  output: {
    // path: __dirname + '/public',
    // filename: 'bundle.js'
    filename: '[name].js',
    // path: __dirname + '/public/',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: 'asset/[hash]',
  }
};


