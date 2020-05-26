import autoprefixer from "autoprefixer";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { pathFn } from "./util";


export default {
  rules: [
    {
      test: /\.ts|tsx/,
      exclude: /node_modules/,

      use: [
        {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-typescript", "@babel/preset-react"],
            plugins: [
              [
                "import",
                { libraryName: "antd", libraryDirectory: "lib", style: true },
              ],
              "@babel/plugin-syntax-dynamic-import",
            ],
          },
        },
      ],
    },
    {
      test: /\.less$/,
      exclude: /[\\/]node_modules[\\/]/,
      include:pathFn('./src'),
      use: [
        MiniCssExtractPlugin.loader,
         "happypack/loader?id=styles"
        ],
    },
    // antd样式文件
    {
      test: /\.less$/,
      include: /[\\/]node_modules[\\/](antd)[\\/]/,
      use: [
        // "style-loader",
        MiniCssExtractPlugin.loader,
        "css-loader",
        "postcss-loader",
        {
          loader: "less-loader",
          options: {
            
            // 因为loader更换api，有些插件未能完全兼容，所以降级到"less-loader": "^5.0.0",
            // https://github.com/webpack-contrib/less-loader/pull/320
            javascriptEnabled: true,
            // lessOptions: {
            //   javascriptEnabled: true,
            // },
          },
        },
      ],
    },
  ],
};
