let arr = [1,2,'zhangsan']
console.log(arr)
//hasOwnProperty只能检测自己有没有该属性，不能检测原型有没有该属性
console.log(arr.hasOwnProperty("length"))
console.log(arr.hasOwnProperty("concat"))
//检测自己和原型有没有该属性，可以用in
console.log('concat' in arr)
