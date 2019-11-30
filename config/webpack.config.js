// webpack 配置信息
const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  // 设置开发环境和生产环境
  mode: process.env.NODE_ENV === 'production' ? 'production' :
    process.env.NODE_ENV === 'development' && 'development',

  // 入口
  entry: paths.mainjs,
  // 出口
  output: {
    path: paths.build,
    filename: 'bundle.[hash:8].js'
  },
  // loader
  // 针对不同的文件，选择不同的loader
  // loader本质上是一些function,对传入的资源进行处理并返回已处理的资源
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: paths.src,
        loader: require.resolve('babel-loader'),
        options: {
          // 指定 babelConfig 文件(未指定的话会在运行目录下搜索)
          configFile: paths.babelConfig
        }
      }
    ]
  },

  plugins: [
    // HtmlWebpackPlugin 插件 提供了将已构建的代码插入模板html文件的功能
    new HtmlWebpackPlugin({
      // 选择模板
      template: paths.indexHTML
    })]
};
