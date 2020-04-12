// List对应原生js的数组结构
const { List } = require("immutable");
const list = List([1, 2, 3, 4]);
console.log(list);

//List有两个静态方法：List.isList()和List.of()
//List.isList()判断是否是List类型
console.log(List.isList(list));
console.log(List.isList([1, 2, 3]));

//List.of()创建新的List
const l = List.of(1, 2, 3, 4);
console.log(l);
