const path = require('path')
// 获取本机ip地址
const IP = require('./host')()

const DllReferencePlugin = require('webpack/lib/DllReferencePlugin')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-cheap-module-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    compress: true,
    host: IP,
    port: 8899,
    hot: true,
    open: true,
    historyApiFallback: true,
    proxy: {
      '/jianan': {
        target: 'http://172.16.50.35/', //代理地址，这里设置的地址会代替axios中设置的baseURL
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        //ws: true, // proxy websockets
        //pathRewrite方法重写url
        pathRewrite: {
          // "^/jianan": "",
          // pathRewrite: { '^/tms': '/' } //重写之后url为 http://192.168.1.16:8085/xxxx
          //pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
        },
      },
    },
  },
  plugins: [
    new DllReferencePlugin({
      manifest: path.resolve(__dirname, '../dll/manifest.json'),
      // !部分mac电脑必须设置此项，否则报错无法引入dll
      context: path.resolve(__dirname, '../dll/manifest.json'),
    }),
    new AddAssetHtmlWebpackPlugin({
      filepath: path.resolve(__dirname, '../dll/react.dll.js'),
    }),
  ],
}
