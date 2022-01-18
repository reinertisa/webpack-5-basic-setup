const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

  // if you do not set entry and output configuration, webpack will look "src" folder
  // and build the output file in "dist" folder as main.js.
  // automatically webpack will create this dist file.
  // After you build use build script in package.json, you can add index.html in dist directory.
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // without additional setting, this will reference .babelrc
          // babel-loader is used by webpack to figure out certain situations.
          // we can use babelrc configuration here but maintenance is hard so we created .babelrc 
          loader: 'babel-loader'
        }
      }
    ]
  },

  devtool: 'source-map',

  // default dev server running on 8080 port and localhost
  devServer: {
    static: './public'
  }

}