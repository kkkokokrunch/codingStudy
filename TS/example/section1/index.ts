// let isDone: boolean = true
// let decliteral: number = 20
let name: string = 'Yee'
let age: number = 30
let sentence = `hello ,my name is ${name}`

//数组两种方式，推荐第一种
let list: number[] = [1,2,3]
let list2: Array<number> = [1,2,3,4,5]

//元组：tuple，类型要一一对应
let x:[string,number]
x = ['hello',666]

//枚举
enum Color {
    Red,
    Green,
    Blue 
}
let c: Color = Color.Green
let colorName: string = Color[2]

//any类型
let notSure: any = 4
notSure = 'maybe a string'
let list3: any[] = [1,2,'hello',true]
list3[1] = 3

//void
function warnUser(): void { //没有返回值
    console.log('this is a warn')
}

//null undefined
let u: undefined = undefined

//never
function error(message: string): never {
    throw new Error(message)
}
function fail() {
    return error('something failed')
}

//类型断言
let someValue: any = 'this is a string'
let strLength: number = (someValue as string).length
export {};