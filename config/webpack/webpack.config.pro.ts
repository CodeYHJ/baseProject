import webpackMerge from "webpack-merge";

import webpack from "webpack";

import { CleanWebpackPlugin } from "clean-webpack-plugin";

import baseConfig from "./webpack.config.base";

import path from "path";

const config: webpack.Configuration = {
    output: {
        path: path.resolve(__dirname, '../../dist'),
        filename: "[name].[chunkhash].js",
        chunkFilename: "[name].js"
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}

module.exports = webpackMerge(baseConfig, config)