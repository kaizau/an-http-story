const path = require("path");
const { src, dest, series } = require("gulp");
const glob = require("glob");
const del = require("del");
const closureCompiler = require("google-closure-compiler").gulp();

function clean() {
  return del("public-closure/*");
}

function copy() {
  return src(["public/index.html", "site/vendor/babylon.js"]).pipe(
    dest("./public-closure")
  );
}

function compileDebug() {
  const files = glob.sync("public/game.*.js");
  const output = path.basename(files[0]);

  return src(files[0], { base: ".", sourcemaps: true })
    .pipe(
      closureCompiler({
        compilation_level: "ADVANCED_OPTIMIZATIONS",
        externs: "closure.externs.js",
        language_in: "ECMASCRIPT_2019",
        language_out: "ECMASCRIPT_2019",
        js_output_file: output,

        debug: true,
        warning_level: "VERBOSE",
      })
    )
    .pipe(dest("public-closure", { sourcemaps: "." }));
}

exports.copy = copy;
exports.compileDebug = compileDebug;
exports.default = series(clean, copy, compileDebug);
