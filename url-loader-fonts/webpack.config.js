const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
  entry: ["@babel/polyfill", path.resolve(__dirname, "src/js/index.js")],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      // aquí van los loaders
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(png|jpg|gif|woff|eot|ttf|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1000000
            }
          }
        ]
      },
      {
        //test: que tipo de archivo quiero reconocer,
        //use: que loader se va a encargar del archivo
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          //fallback: 'style-loader',
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    // aqui van los plugins
    new ExtractTextPlugin("css/[name].css")
  ]
};

module.exports = config;
