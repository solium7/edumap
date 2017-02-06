var webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        index: ['babel-polyfill', './src/index'],
        // import_page: ['./src/importXLSX/import']
    },
    target: 'web',
    output: {
        path: path.join(__dirname, 'dist'),
        // path: __dirname + '/dist',
        publicPath: '/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    // devtool: 'source-map',
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new CopyWebpackPlugin([
            {from: './src/import', to: 'import'},
            {from: './src/index.html', to: 'index.html'}
        ])
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/,
            }, {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff',
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff2',
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream',
            }, {
                test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-otf',
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file',
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml',
            }, {
                test: /\.png$/,
                loader: 'file?name=[name].[ext]',
            }, {
                test: /\.jpg$/,
                loader: 'file?name=[name].[ext]',
            }, {
                test: /\.json$/,
                loader: 'json'
            }, {
                test: /\.geojson$/,
                loader: 'json'
            }, {
                test: /\.scss$/,
                loader: 'style!css?localIdentName=[path][name]--[local]!postcss-loader!sass',
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
};