const path = require('path');
const pkg = require('./package.json');

module.exports = {
    entry: {
        main: './src/index.js',
    },
    watch: true,
    watchOptions: {
        ignored: ['node_modules']
    },
    devServer: {
        contentBase: './src',
        compress: true,
        port: 8081
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }. {
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    minimize: true,
                },
            }, ],
        }, ]
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')

    },
    mode: 'development'
};