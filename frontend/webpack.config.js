const path = require("path")

// module.exports = {
//   mode: "development",
//   entry: "./src/index.js",
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "app.js",
//   },
//   watch: true,
//   watchOptions: {
//     aggregateTimeout: 200,
//     poll: 1000,
//   },
// }
var config = {
  mode: "development",
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
  },
  // TODO: Add common Configuration
  module: {},
}

var fooConfig = Object.assign({}, config, {
  name: "a",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js",
  },
})
var barConfig = Object.assign({}, config, {
  name: "b",
  entry: "./src/threeAnimation.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "threejs.js",
  },
})

// Return Array of Configurations
module.exports = [fooConfig, barConfig]
