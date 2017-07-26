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
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
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
        // }),
    ]
};