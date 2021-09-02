const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: ["@babel/polyfill", "./src/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
    },
    resolve: {
        extensions: [".js"],
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader:"style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            url: false
                        }
                    },
                    {
                        loader: 'resolve-url-loader',
                      },
                    {
                        loader: "sass-loader",
                        options:{
                            sourceMap: true
                        }
                    },
                ],

            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "/assets/",
                            publicPath: "/assets/",
                            name: '[name].[ext]'
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: "./public/index.html",
            filename: "./index.html",
        }),
        new CopyWebpackPlugin(
            {
                patterns:[
                    {
                    from: path.resolve(__dirname, 'src', 'assets/portal2x.png'),
                    to: 'assets'
                },
                    {
                    from: path.resolve(__dirname, 'src', 'assets/scroll_icon.svg'),
                    to: 'assets'
                },
                    {
                    from: path.resolve(__dirname, 'src', 'assets/check_icon.svg'),
                    to: 'assets'
                }
            ]
            }
        ),
    ],
};
