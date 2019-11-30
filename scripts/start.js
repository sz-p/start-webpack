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
