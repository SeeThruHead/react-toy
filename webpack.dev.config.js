var Html = require('html-webpack-plugin');

module.exports = {
  context: __dirname + '/client',
  entry: [
    './app',
    'webpack/hot/dev-server'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  plugins: [new Html({
    template: __dirname + '/client/index.html',
    inject: 'body'
  })],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?optional[]=runtime&stage=0'
      }
    ]
  }
};
