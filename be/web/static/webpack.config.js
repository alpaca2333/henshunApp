const webpack = require('webpack');

module.exports = {
    entry: [
        './js/entry.js'
    ],
    output: {
        filename: './js/bundle.js'
    },
    module: {
        loaders: [
            {
                test:/\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //     },
        //     output: {
        //         comments: false,
        //     },
        // })
    ]
};