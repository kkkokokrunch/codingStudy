interface Bird {
  fly: boolean;
  sing: () => {};
}

interface Dog {
  fly: boolean;
  bark: () => {};
}

//通过as类型断言的方式进行类型保护
function trainAnial(animal: Bird | Dog) {
  if (animal.fly) {
    (animal as Bird).sing();
  } else {
    (animal as Dog).bark();
  }
}

//in 语法来做类型保护
function trainAnialSecond(animal: Bird | Dog) {
  if ("sing" in animal) {
    animal.sing();
  } else {
    animal.bark();
  }
}

//typeof语法来做类型保护
function add(first: string | number, second: string | number) {
  if (typeof first === "string" || typeof second === "string") {
    return `${first}${second}`;
  }
  return first + second;
}

//使用instanceof来做类型保护
class NumberObj {
  count: number;
}

function addSecond(first: NumberObj | object, second: NumberObj | object) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  }
  return 0;
}
