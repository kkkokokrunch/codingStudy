function Zhufeng(options = {}) {
    //将所有属性挂载在$options
    this.$options = options
    var data = this._data = this.$options.data
        //观察对象
    observe(data)
    for (let key in data) {
        Object.defineProperty(this, key, {
            enumerable: true,
            get() {
                return this._data[key]
            },
            set(newVal) {
                this._data[key] = newVal
            }
        })
    }
}
//观察对象，给对象增加Object.defineProperty
function Observe(data) {
    for (let key in data) {
        let val = data[key]
        observe(val)
            // 把data属性通过Object.defineProperty的方式定义属性
        Object.defineProperty(data, key, {
            enumerable: true,
            get() {
                return val
            },
            set(newVal) {
                if (newVal === val) {
                    return
                }
                val = newVal //以后再获取值的时候，将刚才设置的值再丢回去
                observe(newVal)
            }
        })
    }
}

function observe(data) {
    return new Observe()
}