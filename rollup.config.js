import babel from "rollup-plugin-babel";
import replace from "@rollup/plugin-replace";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import externals from "rollup-plugin-node-externals";
import css from "rollup-plugin-css-porter";
import html from "@rollup/plugin-html";

import pkg from "./package.json";
import fs from "fs";
import ejs from "ejs";
import { minify } from "html-minifier-terser";

// Rollup doesn't know how to find indirect dependencies when using PNPM
const find = id => require.resolve(id, { paths: ["node_modules/.pnpm"] });

const namedExports = {
  react: ["Component", "createContext"],
  [find("react-is")]: ["isValidElementType"],
};

const minifyOptions = {
  collapseBooleanAttributes: true,
  collapseWhitespace: true,
};

const isProduction = process.env.NODE_ENV === "production";

export default {
  input: "src/App.js",
  output: {
    file: "dist/App.js",
    format: "cjs",
    sourcemap: !isProduction && "inline",
  },
  external: ["nw.gui"],
  plugins: [
    babel(),
    replace({ "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV) }),

    ...(isProduction
      ? [resolve(), commonjs({ namedExports }), terser()]
      : [externals({ deps: true })]),

    css({ raw: false }),
    html({
      title: pkg.window.title,
      template(data) {
        const str = fs.readFileSync("src/index.ejs", "utf8");
        const result = ejs.render(str, data);
        return isProduction ? minify(result, minifyOptions) : result;
      },
    }),
  ],
};
