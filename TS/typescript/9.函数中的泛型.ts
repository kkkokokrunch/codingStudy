//泛型：泛指的类型
function join<ABC>(first: ABC, second: ABC) {
  return `${first}${second}`;
}

join<string>("1", "1");

//形参是元素为某一类型的数组
function map<T>(params: Array<T>) {
  return params;
}
map<string>(["123"]);

//形参是两个不一样的类型
function diff<T, P>(first: T, second: P) {
  return `${first}${second}`;
}

diff(1, "1"); //可以不写类型，系统会自动进行类型推导
