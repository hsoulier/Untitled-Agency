const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  mode: "production",
  entry: {
    app: "./src/js/index.js",
    threejs: "./src/js/threeAnimation.js",
    // file3: "./src/file3.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
  },

  plugins: [
    new MiniCssExtractPlugin({ filename: "styles/index.css" }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: "/node_modules/",
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "/dist/",
            },
          },
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|woff|woff2|otf|ttf|svg)$/,
        use: ["url-loader?limit=10000&name=./styles/fonts/[name].[ext]"],
      },
    ],
  },
}
