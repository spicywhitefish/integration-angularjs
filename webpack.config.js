var webpack = require('webpack');

module.exports = {
    resolve: {
        extensions: ['', '.ts', '.js'],
        module_directories: ['node_modules']
    },
    entry: {
        'index': './index.ts'
    },
    output: {
        path: './dist',
        filename: 'spicy-tealium.js'
    },
    module: {
        loaders: [
            {
                test: /\.*ts$/,
                loader: 'ts-loader'
            }
        ]
    }
};
