import webpack from "webpack";
import merge from "webpack-merge";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import baseConfig from "./webpack.base.config";
import { pathFn } from "./util";


const config: webpack.Configuration = {
  mode: "production",
  output: {
    path: pathFn("./admin"),
  },
  plugins:[
    new CleanWebpackPlugin(),
  ]
};


export default config;
