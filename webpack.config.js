module.exports = {
  entry: {
    app: './app.js'
  },
  output: {
    path: './build/javascript',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/dist/,
        loader: 'babel?optional[]=runtime&loose=true'
      }
    ]
  },
  devtool: 'source-map'
}