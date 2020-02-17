import pkg from "./package.json";
import path from "path";

import nodeExternals from "webpack-node-externals";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import TerserPlugin from "terser-webpack-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";

export default {
  mode: process.env.NODE_ENV,
  entry: "./src/App.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "App.js",
  },
  externals: [nodeExternals({ whitelist: [/\.css$/] }), { "nw.gui": "nw" }],
  optimization: {
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: pkg.window.title,
      template: "./src/index.template.js",
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
