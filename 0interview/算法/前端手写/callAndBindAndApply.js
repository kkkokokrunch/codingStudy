//call实现原理
//ctx是作用域对象
//实际就是将b.call(a)转换为a.fn = b,所以b()就等于a.fn()
//就是把b变成对象a的一个方法来调用，这样b中的this自然就指向a
//b.call(a)就是把function b() {}放进对象a{}中
Function.prototype.myCall = function (ctx) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    ctx = ctx || window
    //由于谁调用this，this指向谁，现在b要调用a，所以this就是b这个函数
    ctx.fn = this //a.fn = b
    let args = [...arguments].slice(1) //除去ctx以外剩下的参数，也就是b的参数
    let result = ctx.fn(...args) //用result保存ctx.fn
    delete ctx.fn //再讲ctx.fn删去
    return result
}


//apply
Function.prototype.myApply = function (ctx) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    ctx = ctx || window
    ctx.fn = this
    let result
    if (arguments[1]) {
        //由于apply第二个参数是数组，所以arguments[1]就是这个数组
        result = ctx.fn(...arguments[1])
    } else {
        result = ctx.fn()
    }
    delete ctx.fn
    return result
}


var A = Animal.bind(Cat, name)
var a = new A(age)
//bind不会改变new出来的this指向，所以a的this不会指向Cat
Function.prototype.myBind = function (ctx) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    const _this = this //this就是Animal
    const args = [...arguments].slice(1)
    return function F() {
        //这里的this就是a,F就是A
        if (this instanceof F) { //new调用，不会改变this
            //那么直接返回Animal，不用改变this指向
            return new _this(...args, ...arguments)
        }
        //直接调用可以使用apply方法改变this指向
        //但是由于f.bind(obj,1)(2),所以要将参数拼接起来
        return _this.apply(ctx, args.concat(...arguments)) //直接调用
    }
}

//另一种bind
// var A = Animal.bind(Cat,name)
// var a = new A(age)
Function.prototype.bind2 = function (ctx) {
    let _this = this //用了bind方法的函数，Animal
    let bindTo = ctx //要绑定的对象，Cat
    let args1 = [...arguments].slice(1) //也就是name
    function Fn() {
        let isNewCall = this instanceof Fn //判断是不是new出来的对象
        let args2 = [...arguments] //age
        //如果是new出来的，还是不改变指向，还是this，如果不是new出来的，就指向bind接受的第一个参数，并将后面的参数拼接
        return _this.apply(isNewCall ? this : bindTo, args1.concat(args2))
    }
    Fn.prototype = Object.create(_this.prototype) //记得继承一下原型
    return Fn
}



let a = {
    name: 'zhangsan'
}
a.fn = b
a.fn()
//b在a的作用域中执行
function b() {
    console.log(this.name)
}
b.call(a)




