import webpack from "webpack";
import merge from "webpack-merge";
import HtmlwebpackPlugin from "html-webpack-plugin";
import baseConfig from "./webpack.base.config";
import { pathFn } from "./util";
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin'

import HardSourceWebpackPlugin from "hard-source-webpack-plugin"

const smp = new SpeedMeasurePlugin();

const config: webpack.Configuration = {
  mode: "development",
  entry: pathFn("./src/app.tsx"),
  output: {
    path: pathFn("./admin"),
    filename: "js/[name].[hash].js",
    chunkFilename: "js/[name].[hash].js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlwebpackPlugin({
      inject: true,
      title: 'baseproject',
      template: pathFn('./config/HTML/index.html')
    }),
    new HardSourceWebpackPlugin(),

  ]
};
// const merConfig = smp.wrap(merge(baseConfig, config))

// export default merConfig;
export default merge(baseConfig, config)
