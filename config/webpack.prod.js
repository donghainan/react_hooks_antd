// clean dist dir
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// css压缩
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// js 压缩
const TerserJSPlugin = require('terser-webpack-plugin')
// cdn 引入
const WebpackCdnPlugin = require('webpack-cdn-plugin')
// 打包分析
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

module.exports = {
  mode: 'production',
  devtool: false,
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minSize: 1, // 不是第三方模块，被引入两次也会被抽离
          minChunks: 2,
          priority: -20,
        },
      },
    },
    minimizer: [
      new TerserJSPlugin({
        terserOptions: {
          compress: {
            // 去除打印
            drop_console: true,
            // 去除debugger
            drop_debugger: true,
          },
          output: {
            comments: false,
          },
        },
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-router-dom': 'ReactRouterDom',
    axios: 'axios',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackCdnPlugin({
      modules: [
        {
          name: 'react',
          var: 'React',
          path: 'umd/react.production.min.js',
        },
        {
          name: 'react-dom',
          var: 'ReactDOM',
          path: 'umd/react-dom.production.min.js',
        },
        {
          name: 'react-router-dom',
          var: 'ReactRouterDOM',
          path: 'umd/react-router-dom.min.js',
        },
        {
          name: 'axios',
          var: 'axios',
          path: 'dist/axios.min.js',
        },
      ],
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false
    })
  ],
}
