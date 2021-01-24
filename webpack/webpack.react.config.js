const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");

const rootPath = path.resolve(__dirname, '..')

module.exports = {
    resolve: {
        alias: {
            _: path.resolve(rootPath, 'src'),
            _public: path.resolve(rootPath, 'public'),
        },
        extensions: ['.tsx', '.ts', '.js', '.scss'],
        mainFields: ['main', 'module', 'browser']
    },
    entry: path.resolve(rootPath, 'src', 'index.tsx'),
    target: 'electron-renderer',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    devServer: {
        contentBase: path.join(rootPath, 'dist', 'renderer'),
        historyApiFallback: true,
        compress: true,
        hot: true,
        watchContentBase: true,
        inline: true,
        host: '0.0.0.0',
        port: 4000,
        publicPath: '/'
    },
    output: {
        path: path.resolve(rootPath, 'dist', 'renderer'),
        filename: 'js/[name].js',
        publicPath: './'
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                { from: path.resolve(rootPath, "src", "images"), to: "images" }
            ],
        })

    ]
}