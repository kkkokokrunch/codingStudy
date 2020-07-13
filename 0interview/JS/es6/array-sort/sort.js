// let arr = [1,5,2,8,6,9,7]
// arr = arr.sort(function(a,b) {
//     //a-b从小到大
//     //b-a从大到小
//     return b-a
// })
// console.log(arr)

// let cart = [
//     {name:'iphone',proce:12000},
//     {name:'imac',proce:20000},
//     {name:'ipad',proce:8000},
// ]

// cart = cart.sort((a,b) => {
//     return b.price - a.price
// })

// console.log(cart)

let arr = [1,5,2,8,6,9,7]
function sort(array,callback) {
    for (let n in array) {
        for (let m in array) {
            if(callback(array[n],array[m]) < 0) {
                let temp = array[n]
                array[n] = array[m]
                array[m] = temp
            }
        }
    }
    return array
}
arr = sort(arr,function(a,b) {
    return a-b
})

console.log(arr)