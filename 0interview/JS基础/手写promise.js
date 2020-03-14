class MyPromise {
    static PENGDING = 'pending'
    static FULFILLED = 'fulfilled'
    static REJECTED = 'rejected'
    constructor(executor) {
        this.status = MyPromise.PENGDING
        this.value = null
        try {
           executor(this.resolve.bind(this),this.resolve.bind(this)) 
        } catch (error) {
            this.reject(error)
        }
        
    }
    resolve(value) {
        if(this.status = MyPromise.PENGDING) {
            this.status = MyPromise.FULFILLED
            this.value = value
        }
    }
    reject(reason) {
            this.status = MyPromise.REJECTED
            this.value = reason
    }
    then(onFulfilled,onRejected) {
        if(typeof onFulfilled != 'function') {
            onFulfilled = () => {}
        }
        if(typeof onRejected != 'function') {
            onRejected = () => {}
        }
        if(this.status = MyPromise.FULFILLED) {
            onFulfilled(this.value)
        }
        if(this.status = MyPromise.REJECTED) {
            onRejected(this.value)
        }
    }
}