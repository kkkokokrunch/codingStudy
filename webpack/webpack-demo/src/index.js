import _ from "lodash";

console.log(_.join(["a", "b", "c"], "***"));
console.log(_.join(["a", "b", "c"], "***"));

//代码分割和webpack无关
//webpack中的代码分割有两种方式
//1.同步代码：在webpack.common.js中左optimization配置
//2.异步代码无需做任何配置，会自动分割
