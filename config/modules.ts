import autoprefixer from "autoprefixer";
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
      // use: [
      //   "style-loader",
      //   {
      //     loader: "css-loader",
      //     options: {
      //       modules: {
      //         localIdentName: "[path][name]__[local]--[hash:base64:5]",
      //       },
      //     },
      //   },
      //   {
      //     loader: "postcss-loader",
      //     options: {
      //       plugins: [autoprefixer()],
      //     },
      //   },
      //   "less-loader",
      // ],
      use: "happypack/loader?id=styles",
    },
    // antd样式文件
    {
      test: /\.less$/,
      include: /[\\/]node_modules[\\/](antd)[\\/]/,
      use: [
        "style-loader",
        "css-loader",
        "postcss-loader",
        {
          loader: "less-loader",
          options: {
            lessOptions: {
              javascriptEnabled: true,
            },
          },
        },
      ],
    },
  ],
};
