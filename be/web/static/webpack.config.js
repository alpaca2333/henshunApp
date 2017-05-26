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
};