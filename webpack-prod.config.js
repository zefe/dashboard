const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    entry: ["babel-polyfill", "./src/index.js"],
    mode: "production",
    devtool: "cheap-source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["env", "stage-0"], plugins: ["transform-class-properties"] }
            },
            {
                test: /\.(eot|ttf|woff2?)$/,
                loader: "file-loader",
                options: {
                    name: "/statics/fonts/[name].[ext]"
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: "file-loader",
                options: {
                    name: "/statics/imgs/[name].[ext]"
                }
            },
            {
                test: /\.(pdf)$/,
                loader: "file-loader",
                options: {
                    name: "/statics/files/[name].[ext]"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(c|d|t)sv$/,
                use: ["dsv-loader"]
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
        modules: ["node_modules", "src"]
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "bundle.js",
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            title: "Relativity6 React Dashboard",
            template: path.resolve(__dirname, "public/index.html")
        })
    ]
};