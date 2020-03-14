// let hero = {}
// let val = 300

// //Object.defineProperty,第一个值为要绑定的对象，第二个值为要绑定的属性
// Object.defineProperty(hero,'health', {
//     get() {
//         console.log('我的health属性被读取了')
//         return val
//     },
//     set(newVal) {
//         console.log('我的health属性被修改了')
//         val = newVal
//     }
// })

// console.log(hero.health)
// hero.health = 500

function defineReactive(obj,key,val) {
    //劫持对象数据
    Object.defineProperty(obj,key, {
        get() {
            console.log(`我的${key}属性被读取了！`)
            return val
        },
        set(newVal) {
            console.log(`我的${key}属性被修改了！`)
            val = newVal
        }
    })
}

//把对象的每一个属性和方法都变成可观测对象
function observable(obj) {
    const keys = Object.keys(obj)
    keys.forEach(key => {
        defineReactive(obj,key,obj[key])
    })
    return obj
}

const hero = observable({
    health:3000,
    IQ:150
})

function onComputedUpdate(val) {
    console.log(`我的类型是：${val}`)
}

function watcher(obj,key,cb) {
    Object.defineProperty(obj,key,{
        get() {
            const val = cb()
        }
    })
}