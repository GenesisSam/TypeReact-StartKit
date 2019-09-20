const merge = require("webpack-merge");
const common = require("./webpack.common.config.js");
const webpack = require("webpack");
const optimization = require("./webpack.optimization.config");

module.exports = merge(common, optimization, {
  mode: "production",
  output: {
    path: __dirname + "/dist",
    publicPath: "dist",
    filename: "bundle.js",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
});
