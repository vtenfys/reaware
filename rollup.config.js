import babel from "rollup-plugin-babel";
import externals from "rollup-plugin-node-externals";
import { terser } from "rollup-plugin-terser";
import css from "rollup-plugin-css-porter";
import html from "@rollup/plugin-html";

import fs from "fs";
import ejs from "ejs";
import pkg from "./package.json";

export default {
  input: "src/App.js",
  output: {
    file: "dist/App.js",
    format: "cjs",
  },
  external: ["nw.gui"],
  plugins: [
    babel(),
    externals({ deps: true }),
    process.env.NODE_ENV === "production" && terser(),
    css({ raw: false }),
    html({
      title: pkg.window.title,
      template(data) {
        const str = fs.readFileSync("src/index.ejs", "utf8");
        return ejs.render(str, data);
      },
    }),
  ],
};
