'use strict'

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: path.join(__dirname,'../src/main.js')
    },
    output: {
        filename: 'bundle_[hash:12].js',
        path: path.join(__dirname,'../dist_dev')
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'inline-html-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', 
                    'less-loader'
                ]
            },
            {
                test:/.(png|jpg|jpeg|gif)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit: 10240 //10KB
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/index.html'),
            filename:'index.html',
            chunks:['index'],
            inject:true
        }),
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css'
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin()
    ],
    resolve:{
        alias: {
            src: path.join(__dirname, '../src'),
            components: path.join(__dirname, '../src/components'),
            assets: path.join(__dirname, '../assets')
        }
    },
    devServer:{
        contentBase:'../dist_dev',
        hot:true,
        port:3000
    } 
}