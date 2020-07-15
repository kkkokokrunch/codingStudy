//ES6没有变量提升，要先定义类，才能实例化对象
class Father {
    constructor(x,y) {
        this.x = x
        this.y = y
    }
    sum() {
        console.log(this.x + this.y)
    }
    money() {
        console.log(100)
    }
    say() {
        return '我是爸爸'
    }
}

class Son extends Father {
    constructor(x,y) {
        super(x,y)//利用super调用父类的构造函数，super要写在最上面
        this.x = x
        this.y = y
    }
    subtract() {
        console.log(this.x - this.y)
    }
    say() {
        // console.log('我是儿子')
        console.log(super.say() + '的儿子')
        //super.say()子类调用父类中的普通函数
    }
}

var son = new Son(5,3)
son.subtract()
// son.say()
// son.money()
// son.sum()

// var son2 = new Son(3,4)
// son2.sum()