// function distinct(arr) {
//   for(let i = 0;i < arr.length;i++) {
//     for(let j = i+1;j < arr.length;j++) {
//       if(arr[i] == arr[j]) {
//         arr.splice(j,1) //数组去掉重复的那个数
//         arr.length--
//         j--
//       }
//     }
//   }
//   return arr
// }

// function distinct(arr) {
//   return arr.filter((item,index) => {
//     //indexOf的结果是第一次出现的索引，
//     // 第二个1，arr.indexOf(item)还是0，但是后面的index是1
//     arr.indexOf(item) === index  
//   })
// }

function distinct(arr) {
  return Array.from(new Set([...arr]))
}
arr = [1,1,2,3,4,5,5,6,7]
console.log(distinct(arr))

