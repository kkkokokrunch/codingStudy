class Star {
    //constructor函数可以接受传递过来的参数，同时返回实例对象
    //constructor函数，只要new生成实例时，就会自动调用这个函数，如果不写，类也会自动生成这个函数
    //类的共有属性放进constru中
    constructor(uname,age) {
        this.uname = uname
        this.age = age
    }

    //类的公有方法
    //不用写function
    sing(song) {
        // console.log('我唱歌')
        console.log(this.uname + song)
    }
}

var ldh = new Star('刘德华',18)
console.log(ldh)
ldh.sing('冰雨')