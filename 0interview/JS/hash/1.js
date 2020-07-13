var arr = [1,3,6,9,9,5,5,8]

function unique(arr) {
    let result = []
    let hash = {}
    for(let ele of arr) { //遍历原数组
        if(!hash[ele]) {  //如果hash对象中没有这个元素
            result.push(ele) //就将这个元素存入新数组
            hash[ele] = true //并在hash对象中添加这个元素，让他等于true
        }
    }
    return result
}

console.log(unique(arr))