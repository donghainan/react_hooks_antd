const path = require('path')

// html template
const HtmlWebpackPlugin = require('html-webpack-plugin')
// merge config
const { merge } = require('webpack-merge')

// 抽离css
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// 打包进度条
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

// 颜色输出
const chalk = require('chalk')

// env
const env = process.env.NODE_ENV

// 是否为开发环境
const isDev = env === 'development'

// dev config
const dev = require('./webpack.dev')

// prod config
const prod = require('./webpack.prod')

// modify vars theme
const theme = require('../theme')

const baseConfig = {
  entry: { app: path.resolve(__dirname, '../src/main.tsx') },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.less', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  externals: {},
  module: {
    rules: [
      {
        test: /\.(t|j)sx?/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                modifyVars: theme,
                javascriptEnabled: true,
                style: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100 * 1024,
              name: 'img/[name].ext',
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(otf|eot|wof|svg|woff)$/,
        use: 'file-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        use: 'json-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html',
      favicon: path.resolve(__dirname, '../public/favicon.ico'),
      title: '智牧宝',
      inject: true,
      compress: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contentHash:8].css',
    }),
    new ProgressBarPlugin({
      format:
        '  build [:bar] ' +
        chalk.green.bold(':percent') +
        ' (:elapsed seconds)',
      clear: false,
    }),
  ],
}

module.exports = () => {
  if (isDev) {
    return merge(baseConfig, dev)
  }
  return merge(baseConfig, prod)
}
