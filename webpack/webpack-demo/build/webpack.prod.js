const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");

const prodConfig = {
  mode: "production", //设置成production，bundle.js会被压缩;development时，不会被压缩
  devtool: "cheap-module-source-map" // 当代码出错，会显示在源代码中错误的位置
};
module.exports = merge(commonConfig, prodConfig);
