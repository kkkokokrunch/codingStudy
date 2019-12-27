//ts类
// class Person{
//     name:string
//     constructor(n:string) {
//         this.name = n
//     }
//     run():void{
//         console.log(this.name)
//     }
// }
// var p = new Person('张三')
// p.run()

//ts继承
class Person{
    name:string
    constructor(name:string) {
        this.name = name
    }
    run():string {
        return`${this.name}在跑步`
    }
}
// var p = new Person('张三') 

class Web extends Person{
    constructor(name:string) {
        super(name)
    }
}
