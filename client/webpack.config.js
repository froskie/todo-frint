module.exports = {
  entry: __dirname + '/index.js',
  output: {
    path: __dirname + '/../public',
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        query: {
          presets: [
            'travix'
          ]
        }
      }
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'frint': 'Frint',
  }
};