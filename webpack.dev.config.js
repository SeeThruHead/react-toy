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
        loaders: [
          'react-hot',
          'babel?optional[]=runtime&stage=0'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: /(node_modules|bower_components)/,
        loader: 'file?name=[path][name].[ext]'
      },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
};
