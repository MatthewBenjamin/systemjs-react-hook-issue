module.exports = {
  mode: 'development',
  entry: {
    react: ['react'],
    'react-dom': ['react-dom']
  },
  devtool: 'sourcemap',
  module: {
    rules: [
      {parser: {system: false}}
    ]
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'amd'
  },
}