import webpack from "webpack";

import path from "path";

import HtmlwebpackPlugin from "html-webpack-plugin";

import MiniCssExtractPlugin from "mini-css-extract-plugin";

const baseConfig: webpack.Configuration = {
  entry: path.resolve(__dirname, "../../src/main.ts"),
  output: {
    filename: "js/[name].[hash].js",
    chunkFilename: "js/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          process.env.NODE_ENV === "development"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: "config/postcss.config.js",
              },
            },
          },
          "less-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: path.resolve(__dirname, "./Html/index.html"),
      favicon: path.resolve(__dirname, "./Html/favicon.ico"),
    }),
  ],
};

export default baseConfig;
