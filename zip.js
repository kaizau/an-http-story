const fs = require("fs");
const archiver = require("archiver");

async function zip(input, output) {
  fs.rmSync(output, { force: true });
  const out = fs.createWriteStream(output);
  const archive = archiver("zip", { zlib: { level: 9 } });
  archive.pipe(out);
  archive.directory(input, false);
  out.on("close", function onStreamClose() {
    const size = archive.pointer();
    const warning = size > 13312 ? "OVER LIMIT: " : "";
    console.log(`${warning}${output} is ${size} total bytes.`);
  });
  return archive.finalize();
}

zip("public/", "dist/an-http-story.zip");
