const commonPaths = require('./../../paths');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
var path = require('path');

module.exports = (env) => {
	return {
		entry: commonPaths.entryPath,
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					loader: 'babel-loader',
					exclude: /(node_modules)/,
					options: {
						envName: env, // https://github.com/gaearon/react-hot-loader/issues/602#issuecomment-499837236
						presets: [
							[
								'@babel/preset-env',
								{
									targets: {
										"browsers": [
											"edge >= 81",
											"safari >= 10",
											"firefox >= 79",
											"chrome >= 81"
										]
									},
									useBuiltIns: 'usage',
									"corejs": "3.0.0",
								},
							],
							'@babel/preset-react',
							'babel-preset-expo',
						],
						plugins: [
							'@babel/transform-react-constant-elements', // https://babeljs.io/docs/en/babel-plugin-transform-react-constant-elements
							'@babel/transform-react-inline-elements', // TODO (Ronil): Move this to only prod since this obfuscates error messaging (https://babeljs.io/docs/en/babel-plugin-transform-react-inline-elements) 
							'@babel/plugin-transform-runtime',
							'react-hot-loader/babel',

							// Stage 3
							'@babel/plugin-syntax-dynamic-import', // Helps with code splitting
							'@babel/plugin-syntax-import-meta',
						],
					},
				},
				{

				},
				{
					test: /\.(s?)css$/,
					exclude: [/third_party_assets/, /directcss/, /node_modules/],
					use: [
						{
							loader: MiniCssExtractPlugin.loader,

							options: {
								esModule: true,
								modules: {
									namedExport: false,
								},
							},
						},
						{
							loader: 'css-loader',
							options: {
								importLoaders: 3,
								sourceMap: true,
								esModule: true,
								modules: {
									compileType: 'module',
									namedExport: false,
									mode: 'local',
									exportLocalsConvention: 'camelCaseOnly',
									localIdentName: 'foo__[name]__[local]',
								},
							},
						},
						"sass-loader"
					],
				},
				{
					test: /\.(s?)css$/,
					include: [/third_party_assets/, /directcss/, /node_modules/],
					use: [
						{
							loader: MiniCssExtractPlugin.loader,

							options: {
								esModule: true,
							},
						},
						{
							loader: 'css-loader',
							options: {
								importLoaders: 3,
								sourceMap: true,
								esModule: true,
							},
						},
						"sass-loader"
					],
				},
				{
					test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 10000
							}
						}
					]
				},
			],
		},
		devServer: {
			contentBase: commonPaths.publicPath,
			historyApiFallback: true,
			port: 5431,
			hot: true,
			host: 'localhost',
			https: false,
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': '*',
				'Access-Control-Allow-Methods': '*',
			}
		},
		plugins: [
			// HtmlWebpackPlugin links templatePath and web/App.jsx
			new HtmlWebpackPlugin({
				template: commonPaths.templatePath,
				filename: 'index.html'
				//favicon: commonPaths.favicon,
			}),
			new MiniCssExtractPlugin({
				filename: `${commonPaths.cssFolder}/[name].css`,
				chunkFilename: `${commonPaths.cssFolder}/[name].css`,
			}),
			// Copies files from target to destination folder
			new CopyWebpackPlugin({
				patterns: [
					{
						from: `${commonPaths.publicPath}/config.web.json`,
						to: commonPaths.outputPathProd,
						globOptions: {
							ignore: ['*.DS_Store'],
						},
						noErrorOnMissing: true,
					},
				],
			}),
		],
	}
};