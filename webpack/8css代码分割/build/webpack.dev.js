const webpack = require("webpack");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development", //设置成production，bundle.js会被压缩;development时，不会被压缩
  devtool: "cheap-module-eval-source-map", // 当代码出错，会显示在源代码中错误的位置
  devServer: {
    //和react一个效果，会自动打开8080端口
    contentBase: "./dist",
    open: true,
    port: "8080",
    hot: true, //HotModuleReplacementPlugin相关配置
    hotOnly: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/, //打包css文件,css-loader会分析处理所有css文件，style-loader会将打包好的css挂载到index.html的head部分
        use: [
          //loader执行顺序是又到左，下到上
          "style-loader",
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
        use: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]
  },
  plugins: [
    //plugin可以在webpack运行到某个时刻时，自动帮你做一些事情，类似于生命周期函数
    new webpack.HotModuleReplacementPlugin() //热模块重载，只会更新被修改的模块,devServer中的hot: true,
  ]
};

module.exports = merge(commonConfig, devConfig);
