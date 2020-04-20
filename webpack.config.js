const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals');

// import path from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin'
// import { CleanWebpackPlugin } from 'clean-webpack-plugin'

// export default {
module.exports = {
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.css', '.js', '.jsx'],
        modules: ["node_modules", "src", "scripts", "assets", "styles"]
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.min.js'
    },
    module: {
        rules: [{
            test: /\.(ts|tsx)?$/,
            loader: 'ts-loader',
            include: path.resolve(__dirname, 'src')
        }, {
            test: /\.css?$/,
            use: [{
                loader: MiniCssExtractPlugin.loader
            }, 'css-loader']
        }]
    },
    devServer: {
        port: 9000
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Progressive Web Application'
        }),
        new WorkboxPlugin.GenerateSW({
            // these options encourage the ServiceWorkers to get in there fast
            // and not allow any straggling "old" SWs to hang around
            clientsClaim: true,
            skipWaiting: true,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/styles.[contenthash].css'
        }),
    ],
};