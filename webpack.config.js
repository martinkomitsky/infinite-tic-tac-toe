const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin;
const path = require('path');
const merge = require('webpack-merge');
const dirs = require('./webpack/dirs.js');
const commonConfig = require('./webpack/common.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const loaderInclude = [path.resolve(__dirname, 'src'), dirs.include];

module.exports = (env = {}, argv) => {
	const buildMode = argv.mode;
	const isDev = buildMode === 'development';
	const C = env.C || 5;
	const isAnalyze = env.ANALYZE || false;

	const miniCssLoader = {
		loader: MiniCssExtractPlugin.loader,
	};

	const cssLoader = (modules = false) => ({
		loader: 'css-loader',
		options: {
			modules: modules ? {
				localIdentName:
					argv.mode === 'production'
						? '[hash:10]'
						: '[name]__[local]_[hash:5]',
			} : false,
			localsConvention: 'camelCase',
		},
	});

	const postCssLoader = {
		loader: 'postcss-loader',
		options: {
			config: {
				path: path.resolve('./postcss.config.js'),
			},
		},
	};

	return [
		merge(commonConfig, {
			entry: './src/index.tsx',
			output: {
				path: dirs.build,
				filename: `ITTT.${isDev ? 'development' : 'production'}.js`,
			},
			devServer: {
				contentBase: dirs.build,
				compress: true,
				https: true,
				port: 9002,
				// open: 'Google Chrome',
			},
			devtool: 'source-map',
			module: {
				rules: [
					{
						test: /\.module\.css?$/,
						include: loaderInclude,
						use: [
							miniCssLoader,
							cssLoader(true),
							postCssLoader,
						],
					},
					{
						test: /\.css?$/,
						exclude: /\.module\.css$/,
						include: loaderInclude,
						use: [
							miniCssLoader,
							cssLoader(),
							postCssLoader,
						],
					},
				],
			},
			plugins: [
				new webpack.DefinePlugin({
					process: {
						env: {
							NODE_ENV: JSON.stringify(buildMode),
						},
					},
					C,
					isDev,
				}),
				new HtmlWebpackPlugin({
					template: 'src/assets/static/index.html',
				}),
			].concat(isAnalyze ? new BundleAnalyzerPlugin() : []),
		}),
	];
};
