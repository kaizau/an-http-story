const path = require("path");
const { EnvironmentPlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (cliEnv) => {
  const env = { DEBUG: false, PRODUCTION: true };
  Object.assign(env, cliEnv);

  return {
    mode: env.PRODUCTION ? "production" : "development",
    entry: "./site/index.js",
    output: {
      path: path.resolve(__dirname, "public"),
      filename: "game.[hash].js",
    },
    devtool: env.PRODUCTION ? false : "eval-cheap-source-map",
    stats: "minimal",
    plugins: [
      new CleanWebpackPlugin(),
      new EnvironmentPlugin(env),
      new HtmlWebpackPlugin({
        inject: "head",
        scriptLoading: "defer",
        template: path.resolve(__dirname, "site/index.html"),
        templateParameters: {
          babylonSrc: env.PRODUCTION
            ? "https://js13kgames.com/webxr-src/2020/babylon.js"
            : "../vendor/babylon.js",
        },
        minify: env.PRODUCTION
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
};
