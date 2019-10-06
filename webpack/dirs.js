const path = require('path');

module.exports = {
	root: path.resolve(__dirname, '../src'),
	build: path.join(__dirname, '../build'),
	static: path.join(__dirname, '../src/assets/static'),
	include: /node_modules\/((test)\/).*/, // для внешних ui–kit, которых тут нет
};
