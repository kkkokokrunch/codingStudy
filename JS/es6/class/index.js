//ES5
// function Point(x,y) {
//     this.x = x
//     this.y = y
// }
// Point.prototype.toString = function() {
//     return '(' + this.x + ', ' + this.y + ')'
// }

// var p = new Point(1,2)


//ES6
class Point {
    constructor(x,y) {
        this.x = x
        this.y = y
    }
    //x和y都是实例对象point自身的属性（因为定义在this变量上）

    toString() {
        return '(' + this.x + ', ' + this.y + ')'
    }
    //而toString是原型对象的属性（因为定义在Point类上）
}

Point === Point.prototype.constructor

class Foo {
    //如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用
    static classMethod() {
      return 'hello';
    }
    static bar() {
        this.baz()
        //注意，如果静态方法包含this关键字，这个this指的是类，而不是实例。
    }
    static baz() {
        console.log('hello')
    }
    baz() {
        console.log('world')
    }
  }
  
  Foo.bar() //hello
  Foo.classMethod() // 'hello'
  
  var foo = new Foo();
  foo.classMethod()


  //父类的静态方法可以被子类继承
  class Bar extends Foo{

  }
  Bar.classMethod() //hello

  
