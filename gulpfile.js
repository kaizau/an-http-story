const fs = require("fs");
const { src, dest, series, watch } = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const replace = require("gulp-replace");
const archiver = require("archiver");
const del = require("del");
const closureCompiler = require("google-closure-compiler").gulp();

//
// Compile
//

const externs = ["externs.generated.js", "externs.bespoke.js"];
const compilerDefaults = {
  externs,
  js_output_file: "game.js",
  compilation_level: "ADVANCED_OPTIMIZATIONS",
  language_in: "ECMASCRIPT_2019",
  language_out: "ECMASCRIPT_2019",
};

function compile(options = {}) {
  const compilerOptions = Object.assign({}, compilerDefaults, options);
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
    warning_level: "VERBOSE",
    // use_types_for_optimization: false,
  });
}

function compileWatch() {
  return watch(externs, { ignoreInitial: false }, compileDebug);
}

exports.compileDev = series(
  cleanPublicClosure,
  copyIndex,
  copyBabylon,
  compileWatch
);

exports.compileProd = series(cleanPublicClosure, copyIndex, compile);

//
// Attempt to bundle with Closure instead of Webpack
//

const bundleSource = [
  "site/index.js",
  "site/vendor/zzfx.micro.js",
  "site/music/player.js",
  "site/music/soundbox.js",
  "site/music/wilderness.js",
  "site/game/*.js",
];
function bundle(options = {}) {
  const compilerOptions = Object.assign({}, compilerDefaults, options);
  compilerOptions.module_resolution = "NODE";
  if (options.debug) {
    return src(bundleSource, { base: "." })
      .pipe(sourcemaps.init())
      .pipe(replace("process.env.DEBUG", false))
      .pipe(closureCompiler(compilerOptions))
      .pipe(sourcemaps.write("."))
      .pipe(dest("public-closure"));
  } else {
    return src(bundleSource, { base: "." })
      .pipe(replace("process.env.DEBUG", false))
      .pipe(closureCompiler(compilerOptions))
      .pipe(dest("public-closure"));
  }
}

function bundleDebug() {
  return bundle({
    debug: true,
    formatting: "PRETTY_PRINT",
  });
}

function bundleWatch() {
  return watch(
    externs.concat(bundleSource),
    { ignoreInitial: false },
    bundleDebug
  );
}

exports.bundleDev = series(
  cleanPublicClosure,
  copyIndex,
  copyBabylon,
  bundleWatch
);

exports.bundleProd = series(cleanPublicClosure, copyIndex, bundle);

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

function cleanDistClosure() {
  return del("dist/game-closure.zip");
}

function cleanDistWebpack() {
  return del("dist/game.zip");
}

exports.zipClosure = series(cleanDistClosure, zipClosure);
exports.zipWebpack = series(cleanDistWebpack, zipWebpack);

//
// Utility
//

function cleanPublicClosure() {
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
      file += `BABYLON.${key} = function () {}\n`;

      try {
        const instance = new value();
        file += parseClass(key, instance);
      } catch (e) {
        console.log(`Could not construct BABYLON.${key}`);

        file += parseClass(key, value);
      }
    } else if (typeof value === "object" && value !== null) {
      file += `\n\nBABYLON.${key} = {}`;
    } else if (
      ["object" /* null */, "number", "boolean"].includes(typeof value)
    ) {
      file += `\n\nBABYLON.${key} = ${value};`;
    } else if (typeof value === "string") {
      file += `\n\nBABYLON.${key} = "${value}";`;
    } else {
      file += `\n\n// BABYLON.${key} = ${value};`;
    }
  }

  return fs.writeFile(output, file, cb);
}

function parseClass(name, obj) {
  let file = "";
  for (const key in obj) {
    if (key[0] === "_") {
      continue;
    }

    // Class
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      let value;
      try {
        value = obj[key];
      } catch (e) {
        console.log(`Could not access BABYLON.${name}.${key}`, e);
      }

      if (typeof value === "function") {
        file += `BABYLON.${name}.${key} = function () {};\n`;
      } else if (typeof value === "object" && value !== null) {
        file += `BABYLON.${name}.${key} = {};\n`;
      } else if (
        ["object" /* null */, "number", "boolean"].includes(typeof value)
      ) {
        file += `BABYLON.${name}.${key} = ${value};\n`;
      } else if (typeof value === "string") {
        file += `BABYLON.${name}.${key} = "${value}";\n`;
      } else {
        file += `// BABYLON.${name}.${key} = ${value};\n`;
      }
    }
    // Inherited
    else {
      let value;
      const proto = Object.getPrototypeOf(obj);
      try {
        value = proto[key];
      } catch (e) {
        console.log(`Could not interate BABYLON.${name}.prototype.${key}`, e);
      }

      if (typeof value === "function") {
        file += `BABYLON.${name}.prototype.${key} = function () {};\n`;
      } else if (typeof value === "object" && value !== null) {
        file += `BABYLON.${name}.prototype.${key} = {};\n`;
      } else if (
        ["object" /* null */, "number", "boolean"].includes(typeof value)
      ) {
        file += `BABYLON.${name}.prototype.${key} = ${value};\n`;
      } else if (typeof value === "string") {
        file += `BABYLON.${name}.prototype.${key} = "${value}";\n`;
      } else {
        file += `// BABYLON.${name}.prototype.${key} = ${value};\n`;
      }
    }
  }
  return file;
}

exports.generate = generateExterns;
