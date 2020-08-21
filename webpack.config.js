const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isProd = process.env.npm_lifecycle_event === "finalize";

module.exports = {
  mode: isProd ? "production" : "development",
  entry: "./site/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "game.[hash].js",
  },
  devtool: isProd ? false : "eval-cheap-source-map",
  stats: "minimal",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: "head",
      scriptLoading: "defer",
      template: path.resolve(__dirname, "site/index.html"),
      templateParameters: {
        babylonSrc: isProd
          ? "https://js13kgames.com/webxr-src/2020/babylon.js"
          : "../vendor/babylon.js",
      },
      minify: isProd
        ? {
            collapseWhitespace: true,
            minifyCSS: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
          }
        : false,
    }),
  ],
};
