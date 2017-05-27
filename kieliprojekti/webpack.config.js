const
    path = require('path')

const relative = (...p) => path.join(__dirname, ...p);

module.exports = {
    entry: relative('index.js'),
    output: {
        path: relative('dist'),
        filename: 'bundle.js'
    },
    resolve: {
        modules: [
            relative('.tmp'),
            relative('..', 'node_modules')
        ]
    }
};