## promise
1. Promise是一个对象  
    - 因为对象是可以保存状态的，而函数会把结果立刻返回出去（闭包除外）
2. 如何使用Promise
    1. new一个promise
    ```
    const promise = new Promise((resolve, reject) => {

    })
    ```

    2. 将异步代码写在promise的函数中  
     ```
    const promise = new Promise((resolve, reject) => {
        wx.getSystemInfo({
            success:(res) => {
                resolve(res) //将pending修改为resolve
            },
            fail:(error) => {
                reject(error)
            }
        })
    })
    ```

    3. 使用then方法
    ```
    promise.then((res) => {}, (error) => {} )
    ```
