const path = require("path");

module.exports = {

  // Start bundling here
  entry: "./src/frontEnd/main.js",

  // Output a build file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "src/frontEnd/public"),
  },

  // Transpile .js files with babel
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              ["@babel/plugin-proposal-decorators", { "legacy": true }],
            ]
          }
        }
      }
    ]
  }
};
