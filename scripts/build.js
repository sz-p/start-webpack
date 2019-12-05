// 设置环境为开发环境
process.env.NODE_ENV = 'production';
process.env.BABEL_ENV = 'production';

// 引入 webpack
const webpack = require('webpack');
const config = require('../config/webpack.config');
const paths = require('../config/paths');
const fs = require('fs');

// 删除旧文件
removeOldfiles();

// 启动 webpack
const compiler = webpack(config);

// 错误回显
compiler.run((err, stats) => {
  let messages;
  if (err) {
    messages = {
      errors: [err.message]
    };
    console.log(messages);
  } else {
    messages = stats.toJson({ all: false, warnings: true, errors: true });
  }
  if (messages.errors.length) {
    if (messages.errors.length > 1) {
      messages.errors.length = 1;
    }
    console.log(new Error(messages.errors.join('\n\n')));
  }
});

function removeOldfiles() {
  const directoryList = [paths.build];

  while (directoryList.length) {
    let path = directoryList[0];
    let filse = fs.readdirSync(path);
    directoryList.shift();
    filse.forEach((item) => {
      if (fs.lstatSync(path + '/' + item).isDirectory() === true) {
        directoryList.push(path + item + '/');
      } else {
        fs.unlink(path + '/' + item)
      }
    })
  }
}
