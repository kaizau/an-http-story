const fs = require("fs");
const del = require("del");
const archiver = require("archiver");

async function zip(input, output) {
  await del(output);
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

zip("public/", "dist/a-http-story.zip");
