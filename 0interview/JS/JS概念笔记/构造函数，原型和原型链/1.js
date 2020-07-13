const person = {
    name:'zhangsan',
    age:20
}

const personProxy = new Proxy(person,{
    get(target,key) {
        return target[key].toUpperCase()
    },
    set(target,key,value) {
        if(typeof value === 'string') {
            target[key] = value.trim()
        }
    }
})

personProxy.love = '   lisi   '
console.log(personProxy.love)