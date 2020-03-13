const pkg = require("./package.json");
const { existsSync, writeFileSync } = require("fs");
const { spawnSync } = require("child_process");

process.env.NODE_ENV = process.env.npm_config_node_env;
const isDevelopment = process.env.NODE_ENV === "development";

function loadExtension(extension, nwArgs) {
  const target = `${__dirname}/extensions/${extension}`;

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

function setenv(env) {
  env = env || process.argv[3];

  if (env !== "development" && env !== "production") {
    console.log("Please specify an environment (development or production)");
    process.exit(1);
  }

  const vars = {
    nwjs_build_type: env === "development" ? "sdk" : "normal",
    node_env: env,
  };

  writeFileSync(
    `${__dirname}/.npmrc`,
    Object.entries(vars)
      .map(([key, value]) => `${key}=${value}`)
      .join("\n")
  );

  if (existsSync(`${__dirname}/node_modules`)) {
    const nwVersion = pkg.devDependencies["nw"];
    const args = ["install", "-D", `nw@${nwVersion}`];
    spawnSync("pnpm", args, { stdio: "inherit" });
  }
}

function preinstall() {
  if (!existsSync(`${__dirname}/.npmrc`)) {
    console.log(
      "Please set the environment mode; see README.md for instructions"
    );
    process.exit(1);
  }
}

function start() {
  const nwArgs = ["--mixed-context"];

  if (isDevelopment) {
    // Download required extensions and load them
    for (const extension of pkg.extensions) {
      loadExtension(extension, nwArgs);
    }
  }

  spawnSync("nw", nwArgs, { stdio: "inherit" });
}

function build() {
  const args = isDevelopment ? ["--watch"] : [];
  spawnSync("webpack", args, { stdio: "inherit" });
}

const scripts = { setenv, preinstall, start, build };
scripts[process.argv[2]]();
