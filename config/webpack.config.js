// webpack 配置信息
const paths = require('./paths');
module.exports = {
    // 入口
    entry: paths.mainjs,
    // 出口
	output: {
		path: paths.build,
		filename: 'bundle.[hash:8].js'
    },
    // loader
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: paths.src,
				loader: require.resolve('babel-loader')
			}
		]
	}
};
