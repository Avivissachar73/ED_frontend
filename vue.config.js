const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  outputDir: '../backend/public',
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  }
}