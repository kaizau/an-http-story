const path = require("path");
const { EnvironmentPlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ClosurePlugin = require("closure-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = (env) => {
  let mode = "production";
  let debug = false;
  let useLocalBabylon = false;
  let minifyAssets = true;
  let useClosure = false;
  let useAnalyzer = false;
  switch (env.TARGET) {
    case "local":
      mode = "development";
      debug = true;
      minifyAssets = false;
      useLocalBabylon = true;
      break;
    case "production":
      useLocalBabylon = true;
      break;
    case "analyze":
      useAnalyzer = true;
      break;
    case "finalize":
      break;
    case "finalize-closure":
      useClosure = true;
      break;
  }
  env.DEBUG = debug;

  const config = {
    mode,
    entry: "./site/index.js",
    output: {
      path: path.resolve(__dirname, "public"),
      filename: "game.[hash:8].js",
    },
    stats: "minimal",
    devtool: debug ? "eval-cheap-source-map" : false,
    plugins: [
      new CleanWebpackPlugin(),
      new EnvironmentPlugin(env),
      new HtmlWebpackPlugin({
        inject: "head",
        scriptLoading: "defer",
        template: path.resolve(__dirname, "site/index.html"),
        templateParameters: {
          debugScript: debug ? "<script defer src='debug.js'></script>" : "",
          babylonSrc: useLocalBabylon
            ? "babylon.js"
            : "https://js13kgames.com/webxr-src/2020/babylon.js",
        },
        minify: minifyAssets
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

  if (debug || useLocalBabylon) {
    const patterns = [];
    if (useLocalBabylon) {
      patterns.push({ from: "site/vendor/babylon.js", to: "babylon.js" });
    }
    if (debug) {
      patterns.push({ from: "site/debug.js", to: "debug.js" });
    }
    config.plugins.push(new CopyWebpackPlugin({ patterns }));
  }

  if (useAnalyzer) {
    config.plugins.push(new BundleAnalyzerPlugin());
  }

  if (useClosure) {
    config.optimization = {
      concatenateModules: false,
      minimizer: [
        new ClosurePlugin(
          { mode: "AGGRESSIVE_BUNDLE" },
          {
            externs: [path.resolve(__dirname, "closure.externs.js")],
            compilation_level: "ADVANCED",
            languageOut: "ECMASCRIPT_2017",
          }
        ),
      ],
    };
  }

  return config;
};
