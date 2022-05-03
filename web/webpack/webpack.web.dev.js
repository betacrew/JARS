const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const env = 'development';
const envConfig = require(`./webpack.${env}.js`);
module.exports = merge(common(env), envConfig);
