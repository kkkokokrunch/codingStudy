//filter map reduce
const nums = [1,4,8,120,500,20,60,666]

//filter中的回调函数必须返回一个布尔值
//当返回true时，函数内部会自动将这次回调的n加入新的数组中
//当返回false时，函数内部会过滤掉这次的n
const newNums =nums.filter(n => {
  return n < 100;
})

console.log(newNums)

//map函数的使用
let new2Nums = newNums.map(n => {
  return n*2
})
console.log(new2Nums)

//reduce:对数组中所有内容进行汇总
let sum = new2Nums.reduce((preValue,n) => {
  return preValue + n
},0) //0是初始化值

console.log(sum)


let total = nums.filter(n => n < 100).map(n => n*2).reduce((preValue,n) => preValue + n)
console.log(total)




