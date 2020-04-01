class Demo {
  //static说明是静态方法，就是挂载在类上，而不是new的实例上
  private static instance: Demo;
  private constructor(public name: string) {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new Demo("dell lee");
    }
    return this.instance;
  }
}

const demo1 = Demo.getInstance();
const demo2 = Demo.getInstance();
