## 创建对象有几种方法
```javascript
//1
var o1 = {
    name:'o1'
}

//2
var o2 = new Object({name:'o2'})

//3
var M = function(name) {
    this.name = 'o3'
}
var o3 = new M()

//4
var P = {
    name:'o4'
}
var o4 = Object.create(P)
```

## ES5中的继承
1. 组合继承
   ```javascript
   function Father(name) {
       this.name = name
       this.colors = ['red','yellow','pink']
   }
   
   Father.prototype.sayName = function() {
       console.log(this.name)
   }
   
   function Son(name,age) {
       //继承属性
       Father.call(this,name)
       this.age = age
   }
   
   //继承方法
   Son.prototype = new Father()
   //子构造函数记得指回来
   Son.prototype.constructor = Son
   Son.prototype.sayAge = function() {
       console.log(this.age)
   }
   
   var son1 = new Son('张三',18)
   son1.colors.push('blue')
   console.log(son1.colors)
   son1.sayName()
   son1.sayAge()
   
   var son2 = new Son("Greg", 27); 
   console.log(son2.colors);      
   son2.sayName();           
   son2.sayAge();   
   ```
2. 寄生组合继承
    ```javascript
    //Son.prototype = new Father()改成如下
    Son.prototype = Object.create(Father.prototype) //Object.create的第一个参数是新创建对象的原型对象
    ```

3. ES6继承
    ```javascript
    class Father{
        //属性写在constructor中
        constructor(value) {
            this.value = value
        }

        //方法直接写函数
        getValue() {
            console.log(this.value)
        }
    }

    //extends继承
    class Son extends Father {
        constructor(value) {
            super(value) //super关键字继承属性
            this.value = value
        }
    }

    let chiid = new Son(1)
    console.log(chiid.getValue()) 
    console.log(chiid instanceof Father)
    ```


