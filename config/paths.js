// paths 文件 导出了一堆有用的路径信息

const path = require('path');

module.exports = {
	mainjs: path.resolve(__dirname, '../src/main.js'),
	build: path.resolve(__dirname, '../build'),
	src: path.resolve(__dirname, '../src')
};
