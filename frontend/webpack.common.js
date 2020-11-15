const path = require("path")

module.exports = {
  mode: "development",
  entry: {
    app: "./src/js/index.js",
    threejs: "./src/js/threeAnimation.js",
    team: "./src/js/team.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|woff|woff2|otf|ttf|svg)$/,
        use: ["url-loader?limit=10000&name=./styles/fonts/[name].[ext]"],
      },
    ],
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 800,
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
  },
}
