module.exports = {
  mode: 'development',
  entry: './src/entry.js',
  devtool: 'sourcemap',
  module: {
    rules: [
      {parser: {system: false}}
    ]
  }
}