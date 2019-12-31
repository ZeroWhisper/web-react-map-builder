const path = require("path");

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: path.resolve(__dirname, "src")
      }
    ]
  },
  resolve: {
    test: /\.(js|jsx|mjs)$/,
    include: path.resolve(__dirname, "src"),
    loader: "babel-loader",
    alias: {
      teste: path.resolve(__dirname, "src/"),
      pages: path.resolve(__dirname, "src/pages")
    }
  },
  options: {
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "~/*": "*",
            src: "./"
          }
        }
      ]
    ],
    cacheDirectory: true
  }
};
