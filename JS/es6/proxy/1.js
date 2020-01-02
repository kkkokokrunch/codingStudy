const hd = {name:"后盾人"}
const proxy = new Proxy(hd, {
    get(obj,property) {
        // console.log(property)
        return obj[property]
    },
    set(obj,property,value) {
        obj[property] = value
    }
})
console.log(proxy.name)
proxy.name = "张三"
console.log(proxy.name)