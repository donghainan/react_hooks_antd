const path = require('path')
const DllPlugin = require('webpack/lib/DllPlugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: ['react', 'react-dom', 'react-router-dom'],
  output: {
    filename: 'react.dll.js',
    path: path.resolve(__dirname, '../dll'),
    library: 'react',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new DllPlugin({
      name: 'react',
      path: path.resolve(__dirname, '../dll/manifest.json'),
    }),
  ],
}
