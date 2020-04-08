const loaderUtils = require("loader-utils"); //获取options中的参数

module.exports = function (source) {
  const options = loaderUtils.getOptions(this);
  const result = source.replace("dell", options.name);

  this.callback(null, result, source);
};
