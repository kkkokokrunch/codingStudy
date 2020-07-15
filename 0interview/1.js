function A(name) {
  this.name = name;
}
A.prototype.log = function () {
  //每隔2s输出一下name
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(this.name);
    }, 2000 * i);
  }
};
let b = new A("张三");
b.log();
