//有通用型类型的集合可以写成接口
interface Person {
  //readonly name: string说明name是只读的
  name: string;
  age?: number; //age是可选的
  [propName: string]: any; //可以增加属性名为string的其他参数
  say(): string;
}

//类可以继承
interface Teacher extends Person {
  teach(): string;
}
const getPersonName = (person: Person): void => {
  console.log(person.name);
};

const setPersonName = (person: Person, name: string): void => {
  person.name = name;
};

const person = {
  name: "dell",
  sex: "female",
  say() {
    return "say hello";
  }
};

getPersonName(person);
setPersonName(person, "lee");

//一个类应用一个接口
class User implements Person {
  name: "张三";
  say() {
    return "hello";
  }
}

//定义函数的接口
interface SayHi {
  (word: string): string;
}

const say: SayHi = (word: string) => {
  return word;
};
