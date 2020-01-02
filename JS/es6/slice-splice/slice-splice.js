let arr = [1,2,3,4,5,6]
//slice不改变原数组 
//第一个数字表示表示从哪开始截，2表示截到第几个但不包括这个个
// console.log(arr.slice(1,2))
// console.log(arr)

//splice会改变原数组
//第一个数字表示从哪开始截，第二个数字表示截几个
// let hd = arr.splice(0,2)
// console.log(hd)
// console.log(arr)


//splice还有替换功能
//将1替换成hello
arr.splice(1,1,'hello')
console.log(arr)

//同理还可以追加
arr.splice(2,0,'world')
console.log(arr)