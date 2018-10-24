const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: ["babel-polyfill", "./src/index.js"],
    devtool: "inline-source-map",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["env", "stage-0", "react"] }
            },
            {
                test: /\.(eot|ttf|woff2?|png|jpg|jpeg|gif|pdf)$/,
                loader: "url-loader",
                options: {
                    limit: 10000
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
        publicPath: "/dist/",
        filename: "bundle.js",
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};
