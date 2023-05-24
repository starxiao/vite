const ffmpeg = require("ffmpeg.js");
const fs = require("fs");
const testData = new Uint8Array(fs.readFileSync("input.mp4"));
// Encode test video to VP8.
const result = ffmpeg({
  MEMFS: [{name: "input.mp4", data: testData}],
  arguments: ["-i", "input.mp4", "-c:v", "libvpx", "-an", "out.input"],
});
// Write out.webm to disk.
const out = result.MEMFS[0];
fs.writeFileSync(out.name, Buffer(out.data));