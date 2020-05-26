import webpack from "webpack";
import merge from "webpack-merge";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlwebpackPlugin from "html-webpack-plugin";
import optimizeCssPlugin from "optimize-css-assets-webpack-plugin";
import cssnano from "cssnano";
import baseConfig from "./webpack.base.config";
import { pathFn } from "./util";


const config: webpack.Configuration = {
  mode: "production",
  output: {
    path: pathFn("./admin"),
    filename: `[name].1.js`,
    chunkFilename: `js/[name].[chunkhash].2.js`,
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlwebpackPlugin({
      inject: true,
      title: 'baseproject',
      template: pathFn('./config/HTML/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
      chunkFilename: "css/[name].[contenthash].css",
      ignoreOrder: true, // 移除警告提示
    }),
    // opt css
    new optimizeCssPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano,
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true,
    }),
  ]
};


export default merge(baseConfig, config);
