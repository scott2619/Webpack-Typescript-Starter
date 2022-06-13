const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval",
  entry: "./src/index.ts",
  module: {
    rules: [{ test: /\.ts$/, loader: "ts-loader" }],
  },
  devServer: {
    static: path.resolve(__dirname, "public"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};
