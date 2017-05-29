const
    path    = require('path'),
    webpack = require('webpack');

const env = (process.env.NODE_ENV || 'dev').toLowerCase().trim();
const isProd = env === 'prod' || env === 'production';
if (isProd) {
    console.log('Starting production build...');
}

const relative = (...p) => path.join(__dirname, ...p);

const babelLoaderConfig = {
    loader: 'babel-loader',
    options: {
        presets: ['env'],
        plugins: []
    }
};

const jsBuildRules = [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: babelLoaderConfig
    },
    {
        test: /node_modules(\/|\\)kieliprojekti(\/|\\).*\.js$/,
        use: babelLoaderConfig
    }
];

const cssBuildRules = [
    {
        test: /.css$/,
        use: ['style-loader', 'css-loader']
    }
];

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
    module: {
        rules: cssBuildRules.concat(isProd ? jsBuildRules : []),
    },
    plugins: [
        new webpack.IgnorePlugin(/^fs$/)
    ].concat(isProd ? [
        // Production blugins:
        new webpack.optimize.UglifyJsPlugin()

    ] : [])
};