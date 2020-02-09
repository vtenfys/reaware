const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/App.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "App.js"
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  }
};
