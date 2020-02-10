import babel from "rollup-plugin-babel";
import externals from "rollup-plugin-node-externals";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/App.js",
  output: {
    file: "public/App.js",
    format: "cjs",
  },
  external: ["nw.gui"],
  plugins: [
    babel(),
    externals({ deps: true }),
    process.env.NODE_ENV === "production" && terser(),
  ],
};
