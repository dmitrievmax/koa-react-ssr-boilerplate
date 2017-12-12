const webpack = require('webpack');
const path = require('path');
const env = process.env.NODE_ENV || 'development';
const ROOT_PATH = path.resolve(__dirname, './client');

const plugins = [
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify(env)
	})
];

if (env === 'production') {
	plugins.push(
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.ModuleConcatenationPlugin()
	);
}

module.exports = {
	context: ROOT_PATH,
	entry: {
		app: './index.js'
	},
	output: {
		path: path.resolve(__dirname, './public'),
		filename: '[name].js'
	},
	resolve: {
		modules: ['node_modules'],
		extensions: ['.js', '.jsx']
	},
	plugins,
	devtool: env === 'production' ? 'source-map' : 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: [/node_modules/],
				use: ['babel-loader']
			}
		]
	}
};