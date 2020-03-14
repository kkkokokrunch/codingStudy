## Promise

### promise是什么？

1. 从语法上来说，promise是一个构造函数
2. 从功能上来说：promise对象用来封装一个异步操作并可以获取其结果



### promise状态改变

1. pendding变成fulfilled，结果被称为value
2. pendding变成rejected，结果被称为reason



### 如何改变promise的状态

1. resolve(value):pendding会变成fulfilled
2. reject(reason):pendding会变成rejected
3. 抛出异常：如果当前是pendding，就会变成rejected



## Promise.prototype.finally()

`finally`方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。

