const paths = require('./paths');

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
