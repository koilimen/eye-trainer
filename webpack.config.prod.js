const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: {
        main: './src/index.js',
    },
    watch: false,

    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')

    },
    plugins: [
        new CopyPlugin([{
            from: 'src/',
            to: '',
            ignore: ['*.js']
        }, ]),
    ],
    mode: 'development'
};