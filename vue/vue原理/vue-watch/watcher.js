class watcher {
    constructor(opts) {
        this.$data = opts.data
        for (let key in opts.data) {
            this.setData(key, opts.data[key])
        }
    }
    setData(_key, _val) {
        Object.defineProperty(this, _key, {
                get: function() {
                    return this.$data[_key]
                },
                set: function(val) {
                    const OldVal = this.$data[_key]
                    if (oldVal === val) return val
                    this.$data[_key] = val
                    return val
                })
        }
    }