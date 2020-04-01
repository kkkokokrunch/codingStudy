//基础类型number,string,boolean,null,undefined,symbol,void
const count: number = 123;
const teachName: string = "dell";

//对象类型
const teacher: {
  name: string;
  age: number;
} = {
  name: "dell",
  age: 18
};

const numbers: number[] = [1, 2, 3];

//类
class Person {}

const dell: Person = new Person();

//函数
// const getTotal:()=> number = () => {
//   return 123
// }

//类型推断和类型注解

//当系统自动推断出变量类型时，就不需要自己写类型了
// const firstNum = 1
// const secondNum = 2
// const total = firstNum + secondNum

//系统无法推断出类型，我们需要手动加上类型注解
// function getTotal(firstNum: number, secondNum: number): number {
//   return firstNum + secondNum;
// }
//此时才能确认total是number类型
// const total = getTotal(1, 2);

function add({ first, second }: { first: number; second: number }): number {
  return first + second;
}

const total = add({ first: 1, second: 2 });
