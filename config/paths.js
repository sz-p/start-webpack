// paths 文件 导出了一堆有用的路径信息

const path = require('path');

module.exports = {
	public: path.resolve(__dirname, '../public'),
	mainjs: path.resolve(__dirname, '../src/main.js'),
	build: path.resolve(__dirname, '../build'),
	src: path.resolve(__dirname, '../src')
};
