// 递归
function cloneDeep(source) {
    if (typeof source !== 'object') {
        return source
    }
    var target = Array.isArray(source) ? [] : {}
    for (var key in source) { //in遍历对象,of遍历数组
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (typeof source[key] === 'object') {
                target[key] = cloneDeep(source[key])
            } else {
                target[key] = source[key]
            }
        }
    }
    return target
}

a = {
  name:'张三',
  age:20,
  test() {
    console.log(123)
  },
  b: {
    c:100
  }
 }

 test1 = cloneDeep(a)

test1.age = 5
 console.log(a) 