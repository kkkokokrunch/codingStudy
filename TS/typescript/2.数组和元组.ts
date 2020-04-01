const arr: (number | string)[] = [1, "2", 3];
const stringArr: string[] = ["a", "b", "c"];

// const objectArr: {name:string,age:number}[] = [{name:'张三',age:18}]
//上面的太繁琐了，可以使用类型别名
type User = { name: string; age: number };
const objectArr: User[] = [
  { name: "zhangsan", age: 20 },
  { name: "lisi", age: 22 }
];

//元组 tuple
const teacherInfo: [string, string, number] = ["dell", "male", 18];
