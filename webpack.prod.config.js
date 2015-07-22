var Html = require('html-webpack-plugin');

module.exports = {
  context: __dirname + '/client',
  entry: [
    './app'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  plugins: [new Html()],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?optional[]=runtime&stage=0'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
};
