'use strict'

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: 'production',
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
                    {
                        loader:'px2rem-loader',
                        options:{
                            remUnit:75,
                            remPrecesion:8
                        }
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader:'postcss-loader',
                        options:{
                            plugins: () => [
                                require('autoprefixer')({
                                    overrideBrowserslist:['last 10 versions','iOS 7','ie> 8','last 5 Firefox versions']
                                })
                            ]
                        }
                    }, 
                    {
                        loader:'px2rem-loader',
                        options:{
                            remUnit:75,
                            remPrecesion:8
                        }
                    },
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
            inject:true,
            minify:{
                html5:true,
                collapseWhitespace:true,
                preserveLineBreaks:false,
                minifyCSS:true,
                minifyJS:true,
                removeComments:false
            }
        }),
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css'
        }),
        new OptimizeCssAssetsWebpackPlugin({
            assetNameRegExp:/\.css$/g,
            cssProcessor:require('cssnano')
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