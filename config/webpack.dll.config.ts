import webpack from "webpack";
import { pathFn } from "./util";

const dllConfig = {
  entry: {
    react: ["react", "react-dom", "react-router-dom"],
    antd: ["antd"],
  },
  output: {
    filename: "[name].dll.js",
    path: pathFn("./dll"),
    library: "[name]_dll_[hash]",
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]_dll_[hash]",
      path: pathFn("./dll/[name].mainfest.json"),
      context: pathFn("./"),
    }),
  ],
};

export default dllConfig;
