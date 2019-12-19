// const hero = {
//     health:3000,
//     IQ:150
// }
// let hero = {}
// let val = 3000
// Object.defineProperty(hero, 'health', {
//         get() {
//             console.log('我的health属性被读取了')
//             return val
//         },
//         set(newVal) {
//             console.log('我的health属性被修改了')
//             val = newVal
//         }
//     })
// console.log('我的health属性被读取了')

function defineReactive(obj, key, val) {
    const deps = []
    Object.defineProperty(obj, key, {
        get() {
            if (Dep.target && deps.indexOf(Dep.target) === -1) {
                deps.push(Dep.target)
            }
            return val
        },
        set(newVal) {
            val = newVal
            deps.forEach((dep) => {
                dep()
            })
        }
    })
}

function observable(obj) {
    const keys = Object.keys(obj) //Object.keys()用于返回这个对象的所有属性名
    keys.forEach((key) => {
        defineReactive(obj, key, obj[key])
    })
    return obj
}

function onComputedUpdate(val) {
    console.log(`我的类型是：${val}`)
}

//观察者
function watcher(obj, key, cb) {
    const onDepUpdated = () => {
        const val = cb()
        onComputedUpdate(val)
    }
    Object.defineProperty(obj, key, {
        get() {
            Dep.target = onDepUpdated
            const val = cb()
                // onComputedUpdate(val)
            Dep.target = null
            return val
        },
        set() {
            console.error('计算属性无法被赋值')
        }
    })
}
const Dep = {
    target: null
}

const hero = observable({
    health: 3000,
    IQ: 150
})
watcher(hero, 'type', () => {
    return hero.health > 4000 ? '坦克' : '脆皮'
})

hero.type
hero.health = 5000
hero.type