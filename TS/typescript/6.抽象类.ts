abstract class Gemo {
  width: number;
  getType() {
    return "Gemo";
  }
  abstract getArea(): number;
}

//抽象类只能被继承，不能被new
class Circle extends Gemo {
  getArea() {
    return 123;
  }
}
