import webpack from "webpack";
import { pathFn } from "./util";
import HtmlwebpackPlugin from "html-webpack-plugin";
import modules from "./modules";
import HappyPack from "happypack";

import autoprefixer from "autoprefixer";
const autoprefixerFn = autoprefixer();
const config: webpack.Configuration = {
  entry: pathFn("./src/app.tsx"),
  resolve: {
    extensions: [".ts", ".tsx", ".js", "jsx"],
    alias: {
      "@com": pathFn("./src/component"),
    },
  },
  module: modules,
  plugins: [
    new HappyPack({
      id: "styles",
      threads: 3,
      loaders: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: "[path][name]__[local]--[hash:base64:5]",
            },
          },
        },
        {
          loader: "postcss-loader",
          options: {
            plugins: [autoprefixerFn],
          },
        },
        "less-loader",
      ],
    }),
    new webpack.DllReferencePlugin({
      context: pathFn("./"),
      manifest: require(pathFn("./dll/antd.mainfest.json")),
    }),
    new webpack.DllReferencePlugin({
      context: pathFn("./"),
      manifest: require(pathFn("./dll/antd.mainfest.json")),
    }),
    new HtmlwebpackPlugin({
      title: "admin",
      template: pathFn("./config/HTML/index.html"),
    }),
  ],
};
export default config;
