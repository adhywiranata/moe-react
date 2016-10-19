var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    app: ['webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/only-dev-server',
      './src/index.js'
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname,'public/js'),
    publicPath: 'http://localhost:8080/public/js/'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: ['babel-loader'],
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react','react-hmre']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
      }
    ]
  },
  plugins: [
    //new ExtractTextPlugin("style.css")
  ]
};
