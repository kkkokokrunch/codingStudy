const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  module: {
    rules: [
      {
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
    //在production环境下可以不写
    usedExports: true, //tree shaking相关配置
    splitChunks: {
      chunks: "all"
    }
  },
  output: {
    //打包到哪里
    filename: "[name].js", //直接在index.html中引入的文件会用这个名字
    chunkFilename: "[name].chunk.js", //被借间接引用的文件会用这个名字
    path: path.resolve(__dirname, "../dist")
  }
};
