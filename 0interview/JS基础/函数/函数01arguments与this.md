## 函数声明与函数表达式

1. 函数声明  

   函数声明，说明就是用函数function开头来表明这个函数

   ```javascript
   function samurai() {
   	return 'samurai here'
   }
   ```

2. 函数表达式   

   要有‘=’才能被称为表达式

   ```javascript
   var a = function() {}
   ```



## 函数的剩余参数

e.g计算第一个参数与剩余参数中最大值的乘积

```javascript
function multiMax(first,...remainingNumbers) {
  var sorted = remainingNumbers.sort((a,b)=> {
    return b - a //降序
  })
  return first*sorted[0]
}
console.log(multiMax(3,1,2,3) == 9)
```



## ES6处理函数默认参数

```javascript
function performAction(ninja,action="skulking"){
  return ninja+ ' ' + action
}
console.log(performAction('张三'))
```



## arguments

arguments参数是传递给函数的所有参数集合。无论是否有明确定义 对应的形参，通过它我们都可以访问到函数的所有参数。



1.虽然只写了三个形参，但是通过arguments可以获得五个参数

```javascript
function whatever(a,b,c) {
  console.log(arguments[3])
  console.log(arguments[4])
}
whatever(1,2,3,4,5)
```

2.没有写一个形参，蚕食可以获取到任意数量的参数

```javascript
function sum() {
  var sum = 0
  for(let i = 0;i < arguments.length;i++) {
    sum += arguments[i]
  }
  return sum
}
console.log(sum(1,2,3))
```

*<u>虽然可以使用length方法，但是arguments不是一个真正的数组，而...剩余参数则是真正的数组</u>*

```javascript
1. [...arguments]
2. Array.prototype.slice(arguments,0)
3. Array.from(arguments)
//可以将arguments转换为真正的数组
```



## this

### 函数共有四种调用方式：

1. 作为一个函数直接被调用——skulk()
2. 作为一个方法被调用——ninja.skulk()
3. 作为一个构造函数——new Ninja()
4. 通过call和apply方法被调用

this指向可以通过以上四个方面来说明；

### 箭头函数的this

箭头函数没有自己的this值，箭头函数中所使用的this都是来自函数作用域链，它的取值遵循普通普通变量一样的规则，在函数作用域链中一层一层往上找。 

```javascript
// 使用箭头函数
var circle = {
radius: 10,
outerDiameter() {
var innerDiameter = () => {
console.log(2 * this.radius);
};
innerDiameter();
}
};
circle.outerDiameter(); // 打印20
```

对于内层函数innerDiameter，它本身并没有this值，其使用的this来自作用域链，来自更高层函数的作用域。innerDiameter的外层函数outerDiameter是普通函数，它是有this值的，它的this值就是circle对象。因此，innerDiameter函数中所使用的this来自outerDiameter函数，其值为circle对象。 

