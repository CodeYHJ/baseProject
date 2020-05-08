import webpackMerge from "webpack-merge";

import webpack from "webpack";

import baseConfig from "./webpack.config.base";

const config :webpack.Configuration={
    devtool:'inline-source-map'
}

module.exports= webpackMerge(baseConfig,config)