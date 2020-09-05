const fs = require("fs");
const path = require("path");
const { src, dest, series, watch } = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const glob = require("glob");
const del = require("del");
const closureCompiler = require("google-closure-compiler").gulp();

//
// Compile
//

const externs = ["externs.generated.js", "externs.bespoke.js"];

function compile(options = {}) {
  const files = glob.sync("public/game.*.js");
  const output = path.basename(files[0]);

  return src(files[0], { base: "." })
    .pipe(sourcemaps.init())
    .pipe(
      closureCompiler(
        Object.assign(
          {
            externs,
            js_output_file: output,
            compilation_level: "ADVANCED_OPTIMIZATIONS",
            language_in: "ECMASCRIPT_2019",
            language_out: "ECMASCRIPT_2019",
          },
          options
        )
      )
    )
    .pipe(sourcemaps.write("."))
    .pipe(dest("public-closure", { sourcemaps: true }));
}

// https://stackoverflow.com/questions/14147479/debugging-closure-compiler-compiled-javascript
function compileDebug() {
  return compile({
    debug: true,
    formatting: "PRETTY_PRINT",
    // use_types_for_optimization: false,
    // warning_level: "VERBOSE",
  });
}

function compileWatch() {
  watch(externs, { ignoreInitial: false }, compileDebug);
}

exports.default = series(clean, copy, compileWatch);

//
// Utility
//

function clean() {
  return del("public-closure/*");
}

function copy() {
  return src(["public/index.html", "site/vendor/babylon.js"]).pipe(
    dest("./public-closure")
  );
}

function generateExterns(cb) {
  if (typeof window === "undefined") {
    require("browser-env")();
  }
  if (typeof BABYLON === "undefined") {
    require("./site/vendor/babylon.js");
  }

  const output = "externs.generated.js";
  let file = `const BABYLON = {};`;

  for (const key in BABYLON) {
    const value = BABYLON[key];
    if (key[0] === "_") {
      continue;
    } else if (typeof value === "function") {
      file += `\n\n`;
      if (typeof value.constructor === "function") {
        file += `/** @constructor */\n`;
      }
      file += `BABYLON.${key} = function () {\n`;

      try {
        const instance = new value();
        for (const subKey in instance) {
          if (subKey[0] === "_") continue;
          const subValue = instance[subKey];
          file += parseProps(subKey, subValue);
        }
      } catch (e) {
        console.log(`Could not construct BABYLON.${key}.`);
      }

      for (const subKey in value) {
        if (subKey[0] === "_") continue;
        try {
          const subValue = value[subKey];
          file += parseProps(subKey, subValue);
        } catch (e) {
          console.log(`Could not interate BABYLON.${key}.${subKey}`);
        }
      }

      file += `};`;
    } else if (typeof value === "object" && value !== null) {
      file += `\n\nBABYLON.${key} = {}`;
    } else if (["object", "number", "boolean"].includes(typeof value)) {
      file += `\n\nBABYLON.${key} = ${value};`;
    } else if (typeof value === "string") {
      file += `\n\nBABYLON.${key} = "${value}";`;
    } else {
      file += `\n\n// BABYLON.${key} = ${value};`;
    }
  }

  return fs.writeFile(output, file, cb);
}

function parseProps(key, value) {
  let file = "";
  if (typeof value === "function") {
    file += `  this.${key} = function () {};\n`;
  } else if (typeof value === "object" && value !== null) {
    file += `  this.${key} = {};\n`;
  } else if (["object", "number", "boolean"].includes(typeof value)) {
    file += `  this.${key} = ${value};\n`;
  } else if (typeof value === "string") {
    file += `  this.${key} = "${value}";\n`;
  } else {
    file += `  // this.${key} = ${value};\n`;
  }
  return file;
}

exports.generate = generateExterns;
