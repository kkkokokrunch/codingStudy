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





```javascript
let fs = require('fs')

function readFile(filename) {
    //promise接收单个参数——一个被称为执行器（executor）的函数
    //该执行器会被传递两个名为resolve()和reject()的函数作为参数
    //resolve在执行器成功结束时被调用，用于示意该 Promise已经准备好被决议（resolved），而reject()函数则表明执行器的操作已失败。
    return new Promise(function(resolve,reject) {
        //要触发的异步操作
        fs.readFile(filename,{encoding:"utf8"},function(err,contents) {
            //失败则调用reject  
           if(err) {
               reject(err)
               return
           } 
           //成功则调用resolve，并将结果作为参数
           resolve(contents)
        })
    })
}

let promise = readFile("example.txt")

promise.then((contents) => {
    console.log(contents)
},function(err) {
    console.err(err.message)
})
```



## async await

#### async特点

1. await只能放在async函数中
2. 相比generator更加语义化
3. await后面可以是promise对象，也可以是其他类型，最后都会被包装成promise
4. async函数返回值是一个promise对象
5. 只要await语句后面promise状态变成reject，那么整个async函数都会中断

```javascript
async function fn2() {
  let [a,b,c] = await Promise.all([
    readFile('data/a.txt'),
    readFile('data/b.txt'),
    readFile('data/c.txt')
  ])

  console.log(f1.toString())
  console.log(f2.toString())
  console.log(f3.toString())
}
```



#### 解决async抛出错误

1. try catch

   ```javascript
   async function fn1() {
     try {
       let f1 = await readFile('data/a.txt')
       let f2 = await readFile('data/b.txt')
       let f3 = await readFile('data/c.txt')
     } catch (error) {
       
     }
     console.log(f1.toString())
     console.log(f2.toString())
     console.log(f3.toString())
   }
   
   fn1()
   ```

   

2. .catch

   ```javascript
   async function fn1() {
       let f1 = await Promise.reject('出问题了').catch(err => {
   		console.log(res)
       })
       let f2 = await readFile('data/b.txt')
       let f3 = await readFile('data/c.txt')
   
     console.log(f1.toString())
     console.log(f2.toString())
     console.log(f3.toString())
   }
   
   fn1()
   ```

   

   