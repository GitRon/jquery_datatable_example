const merge = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
    mode: 'development',
    output: {
        publicPath: "http://localhost:3000/static/dist"
    },
    devServer: {
        port: 3000,
        hot: true,
        headers: {'Access-Control-Allow-Origin': '*'}
    }
})
