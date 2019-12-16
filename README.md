# start-webpack

搭建一个`逐渐扩充`的webpack工程(扩充过程可以看commit记录)，用以前端工程化学习，以注释的方式说明webpack的主要工作流程以及主要配置项。

功能包括

|功能|备注|
|:--:|:--:|
|es6解析|将es6代码转为es5代码|
|淘宝源|install包更快一些|
|webpack-dev-server|启动一个开发环境运行html和js文件，不用先将文件打包、再打开html文件查看，提供gzip、启动后自动打开浏览器、模块热替换等功能|
|HtmlWebpackPlugin|自动将js写入模板html|
|react|可以写jsx代码|
|babel-preset-react-app|使babel可以解析jsx代码|
|react-hot-loader|为react应用提供模块热更新服务(不用再刷新整个页面)|
|react-router-dom|为react应用提供路由服务|
|babel-loader|将es6的代码解析成通用代码|
|babel-preset-react-app|将jsx代码解析成通用代码|
|css-loader|加载css文件|
|style-loader|将css样式注入html页面|
|sourceMap|输出源码映射|
|打包删除旧文件||
|生产模式的打包流程||
|ts 解析| 解析 typescript 文件|
|ts js混写||

TODO

|功能|备注|
|:--:|:--:|
|构建打包目录||
|css的sorcemap||
|js css 分离||
|bundle压缩||
|webpack打包分析|分析打包后的文件大小|
|常用库代码抽离|将常用的库代码抽离成单独的打包模块,以提升打包性能|

## webpack 主要工作流程
webpack的主要工作是将`模块`打包，这些模块可能包括`js代码模块`，`css模块`,`一些其他静态资源`等。无论是在`pro`模式下还是在`dev`模式下本质上都是将`模块`打包成资源，并依赖一些插件依照一些规范对这些资源进行一定的工程化整合，解决一些前端开发、部署的公共性问题。使其成为一个开发或者构建的封闭实体。

### 开发流程
就开发过程而言一般需要一个`开发服务器`(WebpackDevServer)、一个`代码解析器`(babel)（ES6或Ts代码需要转化为es5 js代码），一个`资源整合器`(webpack)。

整体流程上相对比较单间，根据webpack的config生成webpack，根据WebpackDevServer的config生成WebpackDevServer,监听端口和host，启动服务，主体流程就算走完。

```javascript
// 设置环境为开发环境
process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';


// webpack
const webpack = require('webpack');
// webpackConfig
const webpackConfig = require('../config/webpack.config');

// webpackDevServerConfig
const webpackDevServerConfig = require('../config/webpackDevServer.config');
// webpack 开发服务器
const WebpackDevServer = require('webpack-dev-server');


// 创建devServer
const devServer = new WebpackDevServer(webpack(webpackConfig), webpackDevServerConfig);

// 监听端口
devServer.listen(3000, 'localhost');
```
#### 代码解析器(babel)
这里babel提供了将es6代码解析成es5代码、将`jsx`代码解析成通用代码的服务。

配置`babel`config
```javascript
module.exports = function (api) {
  api.cache(true)
  const presets = [
    // babel 预设套件 根据配置的目标浏览器或者运行环境来自动将ES2015+的代码转换为es5
    "@babel/preset-env",
    // 将 jsx 代码解析成通用代码
    "babel-preset-react-app"
  ];
  return {
    presets,
  };
}
```
#### 资源整合器(webpack)

这里webpack主要提供了设置一些基础参数、根据这些参数调用babel去解析当前代码，并将解析完毕的js代码插入已设定的模板html文件

```javascript
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

```

#### 开发服务器(WebpackDevServer)
这里的开发服务器主要提供了web代理服务,资源文件压缩、开发热替换、服务启动后自动打开网页等服务。

```javascript
module.exports = {
  // app的根目录
  contentBase: paths.public,
  // 开启gzip压缩
  compress: true,
  // 端口号
  port: 3000,
  // 启动webpackDevServer后直接打开网页
  open: true,
  // 开发热替换（不用重新start）
  hot: true,
};
```
