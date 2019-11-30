// paths 文件 导出了一堆有用的路径信息

const path = require('path');

module.exports = {
  babelConfig: path.resolve(__dirname, './babel.config.js'),
  indexHTML: path.resolve(__dirname, '../public/index.html'),
  public: path.resolve(__dirname, '../public'),
  mainjs: path.resolve(__dirname, '../src/main.js'),
  build: path.resolve(__dirname, '../build'),
  src: path.resolve(__dirname, '../src'),
  config: path.resolve(__dirname)
};
