class HD {
    static PENDING = 'pending'
    static FUFILLED = 'fulfilled'
    static REJECTED = "rejected"
    constructor(executor) {
        this.status = HD.PENDING
        this.val = null
        try {
            executor(this.resolve.bind(this),this.reject.bind(this))
        } catch (error) {
            this.reject(error)
        }
    }
    resolve(value) {
        if(this.status == HD.PENDING) {
            this.status = HD.FUFILLED
            this.value = value
        }
    }
    reject(value) {
        if(this.status == HD.PENDING) {
            this.status = HD.REJECTED
            this.value = value
        }
    }
}