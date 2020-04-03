const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
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
      },
      {
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
    new HtmlWebpackPlugin({
      //该插件打包后会自动生成一个html文件，并把打包后的js文件自动引入到html文件中
      template: "src/index.html"
    }),
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, "../")
    }) //打包前会删除dist这个文件
  ],
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  output: {
    //打包到哪里
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist")
  }
};