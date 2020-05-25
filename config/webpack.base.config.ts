import webpack from "webpack";
import { pathFn } from "./util";
import modules from "./modules";
import HappyPack from "happypack";
import autoprefixer from "autoprefixer";

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
            plugins: ()=>[autoprefixer()],
          },
        },
        "less-loader",
      ],
    }),

  ],
};
export default config;
