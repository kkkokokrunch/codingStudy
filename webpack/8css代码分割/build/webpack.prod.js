const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const prodConfig = {
  mode: "production", //设置成production，bundle.js会被压缩;development时，不会被压缩
  devtool: "cheap-module-source-map", // 当代码出错，会显示在源代码中错误的位置
  module: {
    rules: [
      {
        test: /\.scss$/, //打包css文件,css-loader会分析处理所有css文件，style-loader会将打包好的css挂载到index.html的head部分
        use: [
          //loader执行顺序是又到左，下到上
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2 //保证在sass文件嵌套引入的情况下也能按顺序打包
            }
          },
          "sass-loader",
          "postcss-loader" //给一些css3新特性加浏览器前缀
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      }
    ]
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})] //将打包好的css压缩
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
module.exports = merge(commonConfig, prodConfig);
