const pkg = require("../package.json");
const { existsSync, writeFileSync } = require("fs");
const { spawnSync } = require("child_process");

const nwArgs = ["--mixed-context"];

// Download required extensions and load them
for (const extension of pkg.extensions) {
  const target = `${__dirname}/../extensions/${extension}`;

  if (!existsSync(target)) {
    // Download the extension from the Chrome Web Store
    spawnSync("ced", [extension, target], { stdio: "inherit" });

    const manifestPath = `${target}/manifest.json`;
    const manifest = require(manifestPath);

    // Allow extensions to interact with the NW.js app
    manifest.permissions.push("chrome-extension://*/*");
    writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  }

  nwArgs.push(`--load-extension=${target}`);
}

spawnSync("nw", nwArgs, { stdio: "inherit" });
