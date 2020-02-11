import babel from "rollup-plugin-babel";
import replace from "@rollup/plugin-replace";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import externals from "rollup-plugin-node-externals";
import css from "rollup-plugin-css-porter";
import html from "@rollup/plugin-html";

import fs from "fs";
import ejs from "ejs";
import pkg from "./package.json";

const find = id => require.resolve(id, { paths: ["node_modules/.pnpm"] });
const namedExports = {
  [find("react")]: ["Component", "createContext"],
  [find("react-is")]: ["isValidElementType"],
};

export default {
  input: "src/App.js",
  output: {
    file: "dist/App.js",
    format: "cjs",
  },
  external: ["nw.gui"],
  plugins: [
    babel(),
    replace({ "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV) }),

    ...(process.env.NODE_ENV === "production"
      ? [resolve(), commonjs({ namedExports }), terser()]
      : [externals({ deps: true })]),

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
