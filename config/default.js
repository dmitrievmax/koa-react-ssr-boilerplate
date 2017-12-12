module.exports = {
	compress: {
		threshold: 2048
	},
	static: {
		maxage: 86400000
	},
	port: 3000,
	pathToFavicon: '/public/favicon.ico',
	middlewares: [
		'favicon',
		'compress',
		'static',
		'logger',
		'errors',
		'bodyParser'
	]
};