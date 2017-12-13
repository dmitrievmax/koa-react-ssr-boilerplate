module.exports = {
	compress: {
		threshold: 2048
	},
	static: {
		maxage: 0
	},
	port: 3000,
	middlewares: [
		'favicon',
		'compress',
		'static',
		'logger',
		'pug',
		'errors',
		'bodyParser'
	],
	webpack: {
		devServer: {
			port: 8050
		}
	}
};