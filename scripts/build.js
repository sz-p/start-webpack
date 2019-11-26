// 引入 webpack
const webpack = require('webpack');
const config = require('../config/webpack.config');

// 设置环境变量
process.env.NODE_ENV = 'production';

// 启动 webpack
const compiler = webpack(config);

// 错误回显
compiler.run((err, stats) => {
	let messages;
	if (err) {
		messages = {
			errors: [ err.message ]
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
