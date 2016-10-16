var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    app: ['webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/only-dev-server',
      './src/index.js'
    ]
  },
  //entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname,'public/js'),
    publicPath: './public/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: ['babel-loader'],
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react','react-hmre']
        }
      }
    ]
  }
};
