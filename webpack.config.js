var webpack = require('webpack');
var path = require('path');
module.exports = {
	entry: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
		'./entry.js'
	],
	output: {
		path: path.resolve(__dirname),
		filename: "app.js"
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react']
			}
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader',
		}, {
			test: /\.sass$/,
			loader: 'style-loader!css-loader!sass-loader',
		}, {
			test: /\.(png|jpg)$/,
			loader: 'url-loader?limit=8192'
		}]
	},
	plugins: process.env.NODE_ENV === 'production' ? [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin()
	] : [new webpack.HotModuleReplacementPlugin()]
}