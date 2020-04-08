## async await原理

### async就是generator的语法糖

generator函数在调用时并不会执行，只有调用它的next()方法才会执行，并且可以随时暂停

async对于generator的改进：

1. 内置执行器，无需手动执行next()方法
2. 用async代替*，await代替yield，语义性更强
3. yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时会自动转成立即 resolved 的 Promise 对象）
4. 返回值是promise，generator返回的是iterator迭代器，async可以直接使用then方法调用

