const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
process.env.NODE_ENV = 'development';

const webpackConfig = require('../config/webpack.config');
const webpackDevServerConfig = require('../config/webpackDevServer.config');

const devServer = new WebpackDevServer(webpack(webpackConfig), webpackDevServerConfig);

devServer.listen(3000, 'localhost');
