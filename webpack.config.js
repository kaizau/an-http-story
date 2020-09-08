const path = require("path");
const { EnvironmentPlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

// NOTE ClosureWebpackPlugin doesn't work with debug flags, as of 4 Sep 2020.
// https://github.com/webpack-contrib/closure-webpack-plugin/issues/118
// const ClosurePlugin = require("closure-webpack-plugin");

module.exports = (env) => {
  let mode = "production";
  let debug = false;
  let useLocalBabylon = false;
  let minifyAssets = true;
  let useSourceMap = false;
  let useAnalyzer = false;
  switch (env.TARGET) {
    case "dev":
      mode = "development";
      debug = true;
      minifyAssets = false;
      useSourceMap = true;
      useLocalBabylon = true;
      break;
    case "build":
      useLocalBabylon = true;
      break;
    case "zip":
      break;
    case "analyze":
      useAnalyzer = true;
      break;
  }
  env.DEBUG = debug;

  const config = {
    mode,
    entry: "./site/index.js",
    output: {
      path: path.resolve(__dirname, "public"),
      filename: "game.js",
    },
    stats: { preset: "minimal" },
    devtool: useSourceMap ? "eval-cheap-source-map" : false,
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

  if (minifyAssets) {
    config.optimization = {
      minimizer: [
        new TerserPlugin({
          extractComments: false,
          test: [/(?!vendor\/babylon\.js).+\.js/],
          terserOptions: {
            ecma: 2019,
            compress: {
              booleans_as_integers: true,
              drop_console: true,
              ecma: 2019,
              keep_fargs: false,
              module: true,
              passes: 2,
            },
            mangle: {
              properties: {
                regex: /^_/,
                // debug: "",
              },
              module: true,
              toplevel: true,
            },
            output: {
              comments: false,
            },
          },
        }),
      ],
    };
  }

  return config;
};
