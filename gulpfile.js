const fs = require("fs");
const { src, dest, series, watch } = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const archiver = require("archiver");
const del = require("del");
const closureCompiler = require("google-closure-compiler").gulp();

//
// Compile
//

const externs = ["externs.generated.js", "externs.bespoke.js"];

function compile(options = {}) {
  const compilerOptions = Object.assign(
    {
      externs,
      js_output_file: "game.js",
      compilation_level: "ADVANCED_OPTIMIZATIONS",
      language_in: "ECMASCRIPT_2019",
      language_out: "ECMASCRIPT_2019",
    },
    options
  );

  if (options.debug) {
    return src("public/game.js", { base: "." })
      .pipe(sourcemaps.init())
      .pipe(closureCompiler(compilerOptions))
      .pipe(sourcemaps.write("."))
      .pipe(dest("public-closure"));
  } else {
    return src("public/game.js", { base: "." })
      .pipe(closureCompiler(compilerOptions))
      .pipe(dest("public-closure"));
  }
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
  return watch(externs, { ignoreInitial: false }, compileDebug);
}

exports.default = series(clean, copyIndex, copyBabylon, compileWatch);

exports.compileProd = series(clean, copyIndex, compile);

//
// Zip
//

function zip(input, output) {
  const out = fs.createWriteStream(output);
  const archive = archiver("zip", { zlib: { level: 9 } });
  archive.pipe(out);
  archive.file(input + "index.html");
  archive.file(input + "game.js");
  out.on("close", function onStreamClose() {
    console.log(output + " is " + archive.pointer() + " total bytes");
  });
  return archive.finalize();
}

function zipClosure() {
  return zip("public-closure/", "dist/game-closure.zip");
}

function zipWebpack() {
  return zip("public/", "dist/game.zip");
}

function cleanClosure() {
  return del("dist/game-closure.zip");
}

function cleanWebpack() {
  return del("dist/game.zip");
}

exports.zipClosure = series(cleanClosure, zipClosure);
exports.zipWebpack = series(cleanWebpack, zipWebpack);

//
// Utility
//

function clean() {
  return del("public-closure/**");
}

function copyIndex() {
  return src("public/index.html").pipe(dest("./public-closure"));
}

function copyBabylon() {
  return src("site/vendor/babylon.js").pipe(dest("./public-closure"));
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
