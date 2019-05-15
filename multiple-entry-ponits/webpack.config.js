const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
  entry: {
    home: path.resolve(__dirname, "src/js/index.js"),
    precio: path.resolve(__dirname, "src/js/precios.js"),
    contacto: path.resolve(__dirname, "src/js/contactos.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js"
  },
  module: {
    rules: [
      // aquí van los loaders
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
