const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const path = require('path');
const config = require('config');

const IS_PROD = process.env.NODE_ENV === 'production';
const ROOT_PATH = path.resolve(__dirname, './client');
const FILE_NAME = IS_PROD ? '[name].[chunkhash].js' : '[name].js';

const plugins = [
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
	}),
	new ManifestPlugin()
];

if (IS_PROD) {
	plugins.push(
		new CleanWebpackPlugin(['public']),
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
		filename: FILE_NAME
	},
	resolve: {
		modules: ['node_modules'],
		extensions: ['.js', '.jsx']
	},
	plugins,
	devtool: IS_PROD ? 'source-map' : 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: [/node_modules/],
				use: ['babel-loader']
			}
		]
	},
	devServer: {
		headers: { 'Access-Control-Allow-Origin': '*' },
		compress: true,
		port: config.webpack.devServer.port
	}
};