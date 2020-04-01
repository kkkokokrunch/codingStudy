const path = require("path");
module.exports = {
  mode: "production", //设置成production，bundle.js会被压缩;development时，不会被压缩
  entry: "./src/index.js", //入口，打包哪个文件
  module: {
    rules: [{
        test: /\.(jpg|png|gif)$/,
        use: {
          // loader: "file-loader",//打包文件的loader，也可以将jpg换成png，svg或者txt
          loader: "url-loader",
          options: {
            name: "[name]_[hash]. [ext]", //打包后的文件名格式
            outputPath: "images/", //打包后的图片放进image文件夹下
            limit: 20480
          }
        }
      }, {
        test: /\.(eot|ttf|svg|woff)$/,
        use: {
          loader: "file-loader"
        }
      },
      {
        test: /\.scss$/, //打包css文件,css-loader会分析处理所有css文件，style-loader会将打包好的css挂载到index.html的head部分
        use: [
          //loader执行顺序是又到左，下到上
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2, //保证在sass文件嵌套引入的情况下也能按顺序打包
            }
          },
          "sass-loader",
          "postcss-loader" //给一些css3新特性加浏览器前缀
        ]
      }
    ]
  },
  output: {
    //打包到哪里
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};