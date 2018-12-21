const path = require('path');

const VueLoaderPlugin = require("vue-loader/lib/plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    mode:"development",
    entry:{
        main:'./src/app.js'
    },
    output:{
        path: path.resolve(__dirname, './dist'),
        filename:'build.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:"babel-loader",
                query:{
                    presets:['@babel/preset-env'],
                    //plugins:['@babel/plugin-transform-runtime']
                }
                // use:{
                //     loader:'babel-loader',
                //     options:{

                //     }
                // }
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },{
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader, "css-loader"]
            },{
                test:/\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader:'file-loader'
            },{
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            //filename: 'css/style.css'
            filename: "[name].css",
            hunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'index.html',
            minify:{
                //removeAttributeQuotes:true,
                collapseWhitespace: true
            }
        }),
        new OptimizeCSSAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'), //引入cssnano配置压缩选项
            cssProcessorOptions: { 
                discardComments: { removeAll: true } 
            },
            canPrint: true //是否将插件信息打印到控制台
        }),
        new UglifyjsWebpackPlugin()
    ],
    devServer:{
        port:5005,
        historyApiFallback: true
    }
}