const path = require("path");
const distFolderPath = path.join(__dirname, "/dist");

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    path: distFolderPath,
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
};
