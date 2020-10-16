const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    contentBase: './',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000
  },

}