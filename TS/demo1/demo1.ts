//定义数组

//第一种
// var arr:number[] = [1,2,3]
// console.log(arr)

//第二种
// var arr:Array<number> = [1,2,3]

//元组类型
// let arr:[number,string] = [123,'string']
// console.log(arr)

//枚举类型
// enum Color {blue,yellow,green=4}

// var c:Color = Color.blue
// var d:Color = Color.green
// console.log(c)
// console.log(d)

//void
function run():void { //返回啥类型，viod就改成相应类型
    console.log('run')
}
run()