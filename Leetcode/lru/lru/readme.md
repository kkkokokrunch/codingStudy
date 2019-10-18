##es5
    js中，函数是一等公民。
    js过去没有class关键字
    function LRUCache 类的构造函数 定义了一个类
    new LRUCache 可以被实例化
    -new 过程发生了什么？
    • 创建一个空对象，将它的引用赋给 this，继承函数的原型。
    • 通过 this 将属性和方法添加至这个对象
    • 最后返回 this 指向的新对象，也就是实例（如果没有手动返回其他的对象）
        1.生成了一个对象{}，
        内存中空的对象{}
        2.加上属性
        构造函数 this

        面向对象 类，         构造函数，方法，属性
                 class         constructor
                 function A    函数本身  prototype    this
        函数具有prototype属性
        火车头：constructor  prototype对象
        基于原型的面向对象
        -任何函数都有prototype属性，它的值是对象，
        key=>function() {}
        -任何对象都有__proto__私有属性，通过__proto__指向构造函数的prototype属性
        JS面向对象中，类和实例的关系不是父子关系，没有血缘，而是基于原型
        -new的过程
            构造函数被执行，创造一个this，指向对象，加了属性
            对象的__proto__找到原型链上的方法

            cache instanof LRUCache
            JS中没有类的概念 LRUCache也是对象

        
