const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
    const that = this
    that.state = PENDING
    that.value = null
    that.resolvedCallbacks = []
    that.rejectedCallbacks = []

    function resolve(value) {
        if (that.state === PENDING) {
            that.state = RESOLVED
            that.value = value
            that.resolvedCallbacks.map(cb => cb(that.value))
        }
    }

    function reject(value) {
        if (that.state === PENDING) {
            that.state = REJECTED
            that.value = value
            that.rejectedCallbacks.map(cb => cb(that.value))
        }
    }

    try {
        fn(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
    const that = this
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
    onRejected =
        typeof onRejected === 'function' ? onRejected : r => {
            throw r
        }
    if (that.state === PENDING) {
        that.resolvedCallbacks.push(onFulfilled)
        that.rejectedCallbacks.push(onRejected)
    }
    if (that.state === RESOLVED) {
        onFulfilled(that.value)
    }
    if (that.state === REJECTED) {
        onRejected(that.value)
    }
}

new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 0)
}).then(value => {
    console.log(value)
})

//promise.all
Promise.all = function (arr) {
    return new Promise((resolve, reject) => { //promise的方法返回的都还是promise
        if (!Array.isArray(arr)) { // 判断传入的是不是一个数组
            throw new Error(`argument must be a array`)
        }
        let dataArr = [];
        let num = 0;
        for (let i = 0; i < arr.length; i++) { // 遍历异步事件数组的每一项
            let p = arr[i];
            p.then((data) => { // 如果异步事件结果是resolve的
                dataArr.push(data); //就把结果传入dataArr
                num++; // 计数器同时+1
                if (num === arr.length) { //直到数组内最后一项也resolve
                    return resolve(dataArr) // 立刻返回resolve
                }
            }).catch((e) => {
                return reject(e) //只要有一项reject了，立刻返回reject
            })
        }
    })
}
