const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: {
    main: './js/04装饰器模式.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '装饰器.js',
  },
  devServer: {
    contentBase: './dist',
    host: 'localhost',
    port: '8080',
    open: true,
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index1.html',
    }),
  ],
}
