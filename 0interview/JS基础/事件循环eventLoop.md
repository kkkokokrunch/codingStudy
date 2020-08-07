### 为什么会有事件循环？

因为JS是单线程的语言，为了不阻塞主线程，所以用event loop这样的方式。



### 事件循环原理

js引擎遇到一个异步事件后并不会一直等待其返回结果，而是会将这个事件挂起，继续执行执行栈中的其他任务。当一个异步事件返回结果后，js会将这个事件加入与当前执行栈不同的另一个队列，我们称之为事件队列。被放入事件队列不会立刻执行其回调，而是等待当前执行栈中的所有任务都执行完毕， 主线程处于闲置状态时，主线程会去查找事件队列是否有任务。如果有，那么主线程会从中取出排在第一位的事件，并把这个事件对应的回调放入执行栈中，然后执行其中的同步代码...，如此反复，这样就形成了一个无限的循环。这就是这个过程被称为“事件循环（Event Loop）”的原因。

然而，根据这个异步事件的类型，这个事件实际上会被对应的宏任务队列或者微任务队列中去。并且在当前执行栈为空的时候，主线程会 查看微任务队列是否有事件存在。如果不存在，那么再去宏任务队列中取出一个事件并把对应的回到加入当前执行栈；如果存在，则会依次执行队列中事件对应的回调，直到微任务队列为空，然后去宏任务队列中取出最前面的一个事件，把对应的回调加入当前执行栈...如此反复，进入循环。

我们只需记住**当当前执行栈执行完毕时会立刻先处理所有微任务队列中的事件，然后再去宏任务队列中取出一个事件。同一次事件循环中，微任务永远在宏任务之前执行**。

- macro-task(宏任务)：包括整体代码script，setTimeout，setInterval
- micro-task(微任务)：Promise.then,await下一行的代码（await xxx是同步的），process.nextTick

```
console.log('1');

setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})
process.nextTick(function() {
    console.log('6');
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})
```

整体script作为第一个宏任务进入主线程，遇到console.log，输出1。
遇到setTimeout，其回调函数被分发到宏任务Event Queue中。我们暂且记为setTimeout1。
遇到process.nextTick()，其回调函数被分发到微任务Event Queue中。我们记为process1。
遇到Promise，new Promise直接执行，输出7。then被分发到微任务Event Queue中。我们记为then1。
又遇到了setTimeout，其回调函数被分发到宏任务Event Queue中，我们记为setTimeout2。

宏任务Event Queue|微任务Event Queue
-|-|-
setTimeout1     |        process1
setTimeout2	    |        then1

上表是第一轮事件循环宏任务结束时各Event Queue的情况，此时已经输出了1和7。

我们发现了process1和then1两个微任务。

执行process1,输出6。
执行then1，输出8。

好了，第一轮事件循环正式结束，这一轮的结果是输出1，7，6，8。那么第二轮时间循环从setTimeout1宏任务开始：

首先输出2。接下来遇到了process.nextTick()，同样将其分发到微任务Event Queue中，记为process2。new Promise立即执行输出4，then也分发到微任务Event Queue中，记为then2。

宏任务Event Queue|微任务Event Queue
-|-|-
setTimeout2      |      process2
无             |     then2

第二轮事件循环宏任务结束，我们发现有process2和then2两个微任务可以执行。
输出3。
输出5。
第二轮事件循环结束，第二轮输出2，4，3，5。
第三轮事件循环开始，此时只剩setTimeout2了，执行。
直接输出9。
将process.nextTick()分发到微任务Event Queue中。记为process3。
直接执行new Promise，输出11。
将then分发到微任务Event Queue中，记为then3。

宏任务Event Queue|微任务Event Queue
-|-|-
        无       |        process3
        无       |        then3

第三轮事件循环宏任务执行结束，执行两个微任务process3和then3。
输出10。
输出12。
第三轮事件循环结束，第三轮输出9，11，10，12。

整段代码，共进行了三次事件循环，完整的输出为1，7，6，8，2，4，3，5，9，11，10，12。



### promise值透传

```javascript
Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log)
```

.then和.catch的参数都期望是函数，传入非函数会发生值透传

第一个`then`和第二个`then`中传入的都不是函数，一个是数字类型，一个是对象类型，因此发生了透传，将`resolve(1)` 的值直接传到最后一个`then`里。



### async await

await下一行的值，就像promise中.then里面的值，下面的例子中，由于第三行的Promise没有返回值，所以会一直处于pending状态，后面的都不会执行，所以输出结果是：script start/async1 start/promise1/script end

```javascript
async function async1 () {
  console.log('async1 start');
  await new Promise(resolve => {
    console.log('promise1')
  })
  console.log('async1 success');
  return 'async1 end'
}
console.log('srcipt start')
async1().then(res => console.log(res))
console.log('srcipt end')
```

如果promise有了返回值，那么输出结果是script start/async1 start/promise1/script end/promise1 resolve/async1 success/async1 end

```javascript
async function async1 () {
  console.log('async1 start');
  await new Promise(resolve => {
    console.log('promise1')
    resolve('promise1 resolve')
  }).then(res => console.log(res))
  console.log('async1 success');
  return 'async1 end'
}
console.log('srcipt start')
async1().then(res => console.log(res))
console.log('srcipt end')

```













