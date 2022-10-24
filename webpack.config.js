// miniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require("path");

module.exports = {
  entry: "./src/js/main.js",
  // plugins: [new miniCssExtractPlugin()],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "docs"),
  },
  devServer: {
    static: path.resolve(__dirname, "docs"),
    port: 8080,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: () => [require("autoprefixer")],
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
};
