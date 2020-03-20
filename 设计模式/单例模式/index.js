//立即执行函数实现
(function(w) {
  var instance = null
  function Tool() {
    if(instance) return instance
    instance = this
    this.name = '张三'
    this.age = 18
  }
  w.Tool = Tool
})(window)


//闭包实现
// function Tool2() {
//   var instance = this
//   this.name = '李四'
//   this.age = 20

//   //惰性函数，函数只会被执行一次，之后直接调用
//   Tool2 = function() {
//     return instance
//   }
// }

// var t1 = new Tool2()
// var t2 = new Tool2()

// console.log(t1 === t2)