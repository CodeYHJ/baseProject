import webpack from "webpack";
import merge from "webpack-merge";
import baseConfig from "./webpack.base.config";
import { pathFn } from "./util";
import SpeedMeasurePlugin from "speed-measure-webpack-plugin";

const smp = new SpeedMeasurePlugin();

const config: webpack.Configuration = {
  mode: "production",
  output: {
    path: pathFn("./admin"),
  },
};

const mergeConfig = smp.wrap(merge(baseConfig, config));

export default mergeConfig;
