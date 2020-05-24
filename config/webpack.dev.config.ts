import webpack from "webpack";
import merge from "webpack-merge";
import baseConfig from "./webpack.base.config";
import { pathFn } from "./util";
const config: webpack.Configuration = {
  mode: "development",
  output: {
    path: pathFn("./admin"),
  },
};

export default merge(baseConfig, config);
