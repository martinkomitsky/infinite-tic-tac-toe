const merge = require('webpack-merge');
const commonConfig = require('../webpack/common.config.js');
const dirs = require('../webpack/dirs.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(
	{
		module: commonConfig.module,
		resolve: commonConfig.resolve,
	},
	{
		module: {
			rules: [
				{
					test: /\.stories\.tsx?$/,
					loaders: [
						{
							loader: require.resolve('@storybook/addon-storysource/loader'),
							options: { parser: 'typescript' },
						},
					],
					enforce: 'pre',
				},
				{
					test: /\.css?$/,
					include: [dirs.root, dirs.include],
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
						},
						{
							loader: 'css-loader',
							options: {
								modules: {
									localIdentName: '[name]__[local]_[hash:5]',
								},
								localsConvention: 'camelCase',
							},
						},
						{
							loader: 'postcss-loader',
						},
					],
				},
			],
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: 'style.css',
			}),
			new OptimizeCssAssetsPlugin(),
		],
	}
);
