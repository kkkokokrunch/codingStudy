// let arr = [1,2,3,4,5,6]
// arr.reduce((pre,value,index,array) => {
//     console.log(pre,value)
//     return 99
// })
// arr.reduce((pre,value,index,array) => {
//     console.log(pre,value)
//     return 99
// },0)
let arr = [1,2,3,1,1,1,2]
function arrayCount(array,item) {
   return array.reduce((total,cur) => {
        total += item == cur?1:0
        return total
    },0)
}
console.log(arrayCount(arr,1))

function arrayMax(array) {
    return array.reduce((pre,cur) => {
        return pre > cur ? pre : cur
    })
} 

console.log(arrayMax(arr))