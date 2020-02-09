const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/App.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "App.js",
  },
  externals: [
    nodeExternals({
      whitelist: [
        "react-dom", // for react-devtools support
        "react-jss", // for proper style injection
      ],
    }),
    { "nw.gui": "nw" },
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
