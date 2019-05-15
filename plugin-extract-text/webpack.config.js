const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: path.resolve(__dirname,'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module:{
    rules:[
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
    new ExtractTextPlugin("css/styles.css")
  ]
}

module.exports = config