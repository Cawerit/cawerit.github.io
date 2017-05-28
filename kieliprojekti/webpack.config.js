const
    path    = require('path'),
    webpack = require('webpack');

const relative = (...p) => path.join(__dirname, ...p);

module.exports = {
    entry: relative('index.js'),
    output: {
        path: relative('dist'),
        filename: 'bundle.js'
    },
    resolve: {
        modules: [
            relative('..', 'node_modules')
        ]
    },
    plugins: [
        new webpack.IgnorePlugin(/^fs$/)
    ]
};