const path = require("path");

const config = {
  entry: path.resolve(__dirname, "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    open: true, //abre pestaña en el navegador
    port: 3000
  },
  module: {
    rules: [
      // aquí van los loaders
      {
        //test: que tipo de archivo quiero reconocer,
        //use: que loader se va a encargar del archivo
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};

module.exports = config;
