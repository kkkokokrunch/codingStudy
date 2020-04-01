//pirvate 只能在类内被调用
//protected 只允许在类内和继承的子类中被调用
// public 到处都可以被调用
class Person {
  public name: string;
  public sayHi() {
    this.name;
    console.log("hi");
  }
}

//构造器
class Star {
  // 传统写法
  // public name:string
  // constructor(name:string) {
  //   this.name = name
  // }

  //简化写法
  constructor(public name: string) {}
}
