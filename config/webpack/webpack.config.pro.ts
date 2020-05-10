import webpackMerge from "webpack-merge";

import webpack from "webpack";

import { CleanWebpackPlugin } from "clean-webpack-plugin";

import baseConfig from "./webpack.config.base";

import MiniCssExtractPlugin from "mini-css-extract-plugin";

import path from "path";

const config: webpack.Configuration = {
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "js/[name].[chunkhash].js",
    chunkFilename: "[name].js",
  },
  plugins: [
    new CleanWebpackPlugin(), // 提取 css
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
      chunkFilename: "css/[name].[contenthash].css",
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
};

module.exports = webpackMerge(baseConfig, config);
