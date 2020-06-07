const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  /* here you can define another js file */
  entry: {
    index: "./src/js/index.js",
    another: "./src/js/another.js",
  },
  output: {
    filename: "[name].[hash:8].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 8080,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "public" }],
    }),

    /* here you can define another html file and its dependencies */
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/another.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "another.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/elektronika.html",
      inject: true,
      chunks: ["index", "elektronika"],
      filename: "elektronika.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/inwestowanie.html",
      inject: true,
      chunks: ["index", "inwestowanie"],
      filename: "inwestowanie.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/mojapraca.html",
      inject: true,
      chunks: ["index", "mojapraca"],
      filename: "mojapraca.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/myhouse.html",
      inject: true,
      chunks: ["index", "myhouse"],
      filename: "myhouse.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/omnie.html",
      inject: true,
      chunks: ["index", "omnie"],
      filename: "omnie.html",
    }),
  ],
};
