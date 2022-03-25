const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPluglin = require('html-webpack-plugin');

module.exports = {
    entry: { main: './src/pages/index.js' },
    output: { 
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: ''
    },
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        port: 8080
    },
    module: {
        rules: [ 
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules/'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPluglin({ 
            template: './src/index.html'
        })
    ],
    // stats: { children: true }
};