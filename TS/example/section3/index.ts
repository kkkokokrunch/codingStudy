// interface LabelledValue {
//     label: string
// }

// function printLabel(labelledObj: LabelledValue) {
//     console.log(labelledObj.label)
// }

// let myObj = {
//     size: 10,
//     label: 'Size 10 Object'
// }

// printLabel(myObj)


//可选属性
interface Square {
    color: string
    area: number
}

interface SquareConfig {
    color?: string
    width?: number
}

function createSquare(config: SquareConfig): Square {
    let newSquare = {color:'white',area:100}
    if(config.color) {
        newSquare.color = config.color
    }
    if(config.width) {
        newSquare.area = config.width*config.width
    }
    return newSquare
}

let mySquare = createSquare({color: 'black'})


//只读属性
interface Point {
    readonly x: number
    readonly y: number
}

let p1: Point = {x:10,y:20}
// p1.x = 5 报错

    //数组的只读属性
    let a: number[] = [1, 2, 3, 4]
    let ro: ReadonlyArray<number> = a
    // ro[0] = 12 // error!
    // ro.push(5) // error!
    // ro.length = 100 // error!
    // a = ro // error!

    //但是可以用断言重写
    a = ro as number[]

//函数类型
interface SearchFunc {
    (source: string,subString:string): boolean
}

let mySearch: SearchFunc
mySearch = function(src,sub) {
    let result = src.search(sub)
    return result > -1
}

//可索引类型
interface StringArray {
    [index: number]: string
}
let myArray: StringArray
myArray = ['Bob','Fred']
let myStr: string = myArray[0]

//类类型
//看下面的例子，我们定义了两个接口，  `ClockConstructor` 为构造函数所用和 `ClockInterface` 为实例方法所用。 
//为了方便我们定义一个构造函数 `createClock`，它用传入的类型创建实例。
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface
  }
  interface ClockInterface {
    tick()
  }
  
  function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute)
  }
  
  class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
      console.log('beep beep')
    }
  }
  class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
      console.log('tick tock')
    }
  }
  
  let digital = createClock(DigitalClock, 12, 17)
  let analog = createClock(AnalogClock, 7, 32)

//继承接口
interface Shape {
    color: string
}

interface PenStroke {
    penWidth: number
}

interface Square extends Shape, PenStroke {
    sideLength: number
}

let square = {} as Square
square.color = 'blue'
square.sideLength = 10
square.penWidth = 5.0

//混合类型
