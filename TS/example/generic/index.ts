function identity<T>(arg: T):T {
    return arg
}
//第一种明确指定T是string类型
let output = identity<string>('myString')

//第二种，编译器自动判断传入类型
let output1 = identity('myString')

function loggingIdentity<T>(arg: T[]):T[] {
    console.log(arg.length)
    return arg
}

function getData<T>(value:T):any {
    return '123456'
}

getData<number>(123)

//泛型类
class MinClass<T> {
    public list:T[] = []
    add(value:T) {
        this.list.push(value)
    }
    min():T {
        var minNum = this.list[0]
        for(var i = 0;i < this.list.length;i++) {
            if(minNum > this.list[i]) {
                minNum = this.list[i]
            }
        }
        return minNum
    }
}

var m1 = new MinClass<number>()
m1.add(1)
m1.add(2)
m1.add(3)

//泛型接口
