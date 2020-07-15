### 0.1+0.2为什么不等于0.3

js的Number类型遵循的是IEEE754标准，将0.1转换为改标准时，需要先将0.1转换为二进制表示，再转为科学计数法表示，再将其转为IEEE754标准。

0.1 的二进制表示为 0.00011...(无限重复 0011)

0.00011...(无限重复 0011) 通过科学计数法表示则是 1.10011001...(无线重复 1001)*2

所以最后得到的是一个无限不循环小数



### NaN是什么，是什么类型，验证他的函数是什么

- NaN是JS中的Number类型，它表示Not A Number（不是数字）任何值和NaN比较都不相等，
- 验证他的函数式isNaN()

### null和undefined区别
1. null表示没有对象，即该处不应该有值
    1. 作为函数的参数，表示该函数的参数不是对象
    2. 作为对象原型链的终点
2. undefined表示缺少值，即此处应该有值，但没有定义
    1. 定义了形参，没有传实参，显示undefined
    2. 对象属性名不存在时，显示undefined
    3. 函数没有写返回值，即没有写return，拿到的是undefined
    4. 写了return，但没有赋值，拿到的是undefined
3. null和undefined转换成number数据类型
    1. null 默认转成 0
    2. undefined 默认转成 NaN

### window对象和document对象
1. 指代不同，documeng指给定浏览器窗口中的html文档，window指浏览器中打开的窗口
2. 使用 document 对象可以对 HTML 文档进行检查、修改或添加内容，并处理该文档内部的事件。
3. window对象：浏览器会为 HTML 文档创建一个 window 对象，并为每个框架创建一个额外的 window 对象。




## 给DOM元素绑定事件有哪些方法？
```
<!-- 1--html内直接绑定 -->
    <input type="button" id="btn0" onclick="alert('执行了html绑定的方法')" value="html中绑定"></input>
    <!-- 2--使用js绑定 -->
    <input type="button" id="btn1" value="js绑定">
    <!-- 3--使用addEventListener绑定 -->
    <input type="button" id="btn2" value="addEventListener绑定"></input>

    <script>
        //********js绑定事件的js代码*********
        let button1 = document.getElementById("btn1")
        button1.onclick = function() { console.log("执行了js绑定的事件") }
        //将覆盖之前绑定的onclick事件
        button1.onclick = function() { console.log("执行了js绑定的第二个事件") }


        //*********addEventListener绑定的js代码*********
        let button2 = document.getElementById("btn2")
        //使用addEventListener（）可为一个元素绑定多个事件
        button2.addEventListener("mouseover", func1, false)
        button2.addEventListener("click", func2, false)
        button2.addEventListener("click", func3, false)
        function func1() {
            console.log(button2)
        }
        function func2() {
            console.log(Date())
        }
        function func3() {
            console.log("---------------")
        }
        //使用removeEventListener(event,function)移除事件
        // button2.removeEventListener("mouseover", func1)
    </script>
```

## js的三大事件
1. 鼠标事件
    - click：单击
    - dblclick：双击
    - mousedown：鼠标按下
    - mouseup：鼠标抬起
    - mouseover：鼠标悬浮
    - mouseout：鼠标离开
    - mousemove：鼠标移动
    - mouseenter：鼠标进入
    - mouseleave：鼠标离开
2. 键盘事件
    - keydown：按键按下
    - keyup：按键抬起
    - keypress：按键按下抬起
3. HTML事件
    - load：文档加载完成
    - select：被选中的时候
    - change：内容被改变
    - focus：得到光标
    - resize：窗口尺寸变化
    - scroll：滚动条移动


## js里的垃圾回收机制
1. 由于字符串、对象和数组没有固定大小，所有当他们的大小已知时，才能对他们进行动态的存储分配。JavaScript程序每次创建字符串、数组或对象时，解释器都必须分配内存来存储那个实体。只要像这样动态地分配了内存，最终都要释放这些内存以便他们能够被再用，否则，JavaScript的解释器将会消耗完系统中所有可用的内存，造成系统崩溃。
2. 垃圾回收通常有两种方式
    - 引用计数 （不常用）: 判断一个对象是否要被回收就是要看是否还有引用指向它,如果是"零引用",那么就回收，但是当出现循环引用时，这种方法就会有问题。
    - 标记清除 （常用）


## js的本地的储存有哪些
javaScript有三种数据存储方式，分别是：
1. sessionStorage
2. localStorage
3. cookie
相同点：都保存在浏览器端
不同点：
1. 传递方式不同
    - cookie数据始终在同源的http请求中携带（例如token），即cookie在浏览器和服务器间来回传递。
    - sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。
2. 数据大小不同
    - cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下。
    - 存储大小限制也不同，cookie数据不能超过4k，同时因为每次http请求都会携带cookie，所以cookie只适合保存很小的数据，如会话标识。
    - sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。
3. 数据有效期不同
    - sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持；
    - localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据（例如十天内免登陆）；
    - cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。
4. 作用域不同
    - sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；
    - localStorage 在所有同源窗口中都是共享的；
    - cookie也是在所有同源窗口中都是共享的。
    - Web Storage 支持事件通知机制，可以将数据更新的通知发送给监听者。
    - Web Storage 的 api 接口使用更方便。

    ```
    localStorage.a = 3;//设置a为"3"
    localStorage["a"] = "sfsf";//设置a为"sfsf"，覆盖上面的值
    localStorage.setItem("b","isaac");//设置b为"isaac"
    var a1 = localStorage["a"];//获取a的值
    var a2 = localStorage.a;//获取a的值
    var b = localStorage.getItem("b");//获取b的值
    localStorage.removeItem("c");//清除c的值
    ```

## TOKEN
在前后端完全分离的情况下，Vue项目中实现token验证大致思路如下：

1. 第一次登录的时候，前端调后端的登陆接口，发送用户名和密码

2. 后端收到请求，验证用户名和密码，验证成功，就给前端返回一个token

3. 前端拿到token，将token存储到localStorage和vuex中，并跳转路由页面

4. 前端每次跳转路由，就判断 localStroage 中有无 token ，没有就跳转到登录页面，有则跳转到对应路由页面

5. 每次调后端接口，都要在请求头中加token

6. 后端判断请求头中有无token，有token，就拿到token并验证token，验证成功就返回数据，验证失败（例如：token过期）就返回401，请求头中没有token也返回401

7. 如果前端拿到状态码为401，就清除token信息并跳转到登录页面



## eval函数
1. eval() 函数作用：可以接受一个字符串str作为参数，并把这个参数作为脚本代码来
执行。
2. 参数情况：（1）如果参数是一个表达式，eval() 函数将执行表达式；
            （2） 如果参数是Javascript语句，eval()将执行 Javascript 语
3. 注意：（如果执行结果是一个值就返回，不是就返回undefined，如果参数不是一
个字符串，则直接返回该参数）
4. 语法：eval(string)，
5. 案例：
eval("var a=1");//声明一个变量a并赋值1。
eval("2+3");//执行加运算，并返回运算值。
eval("mytest()");//执行mytest()函数。
eval("{b:2}");//声明一个对象。如果想返回此对象，则需要在对象外面再嵌套一层小括如下：eval("({b:2})");
注意：使用eval来解析JSON格式字符串的时候，会将{}解析为代码块，而不是对象的字面量
        //1.在JSON格式的字符串前面拼接上 "var o ="
        //2.把JSON格式的字符串使用()括起来，就不会将{}解析为代码块，而是表达式

6. 函数作用域：eval()函数并不会创建一个新的作用域，并且它的作用域就是它所在的
作用域，有时候需要将eval()函数的作用域设置为全局，当然可以将eval()在全局作用
域中使用，这个时候可以用window.eval()的方式实现。

7. Function和eval有什么区别？
共同点：都可以讲字符串转化为js代码
不同点：Function创建出来的函数，并不会直接调用，只有当手动去调用创建出来的函数的时候才，eval把字符串
转化为代码后，直接就执行了。

8. 《eval函数，它可不可以解释由JS原码组成的字符串呢？//可以的，
9.  然后这个函数能不能用调式工具的断点来调试呢?//是不可以用断点，
10. 这个函数是js自带的函数，使用的话会不会引起安全问题呢？//是会的，它会引起XSS攻击，
11. 还有一个就是这个函数，它会不会有效率问题，该函数是动态解释字符串，会不会存在效率问题？//当时写的是会，效率问题主要还是在自身逻辑上面（建议自行百度）








