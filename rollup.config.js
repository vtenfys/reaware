import babel from "rollup-plugin-babel";
import replace from "@rollup/plugin-replace";
import externals from "rollup-plugin-node-externals";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

const isProduction = process.env.NODE_ENV === "production";

export default {
  input: "src/main.js",
  output: {
    file: "dist/main.js",
    format: "cjs",
    sourcemap: !isProduction && "inline",
  },
  external: ["nw.gui"],
  plugins: [
    babel(),
    replace({ "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV) }),
    externals({
      deps: true,
      // Exclude modules containing CSS except for their main exports
      exclude: ["@fortawesome/fontawesome-svg-core", "overlayscrollbars"],
      include: ["@fortawesome/fontawesome-svg-core", "overlayscrollbars"],
    }),
    resolve(), // Required for modules excluded from externals
    postcss({ extract: true, minimize: isProduction }),
    isProduction && terser(), // Minify production builds
  ],
};
