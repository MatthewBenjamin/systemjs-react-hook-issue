module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'sourcemap',
  module: {
    rules: [
      {parser: {system: false}},
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ["@babel/preset-react"]
            }
          }
        }
    ]
  },
  externals: ['react', 'react-dom'],
  output: {
    libraryTarget: 'amd',
    filename: 'url.js'
  },
}