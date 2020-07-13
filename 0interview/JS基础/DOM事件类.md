## DOM事件的级别
1. DOM0
    ```
    element.onclick = function(){}
    ```
2. DOM2 addEventListener第三个参数默认为false，代表事件冒泡
    ```
    element.addEventListener('click',function() {},flase)
    ```
3. DOM3
    ```
    element.addEventListener('keyUp',function() {},flase)
    ```
## DOM事件模型
冒泡和捕获

## DOM事件流
事件通过捕获到达目标元素（比如按下鼠标左键），再从目标元素上传到window对象（冒泡）
## 描述DOM事件捕获的具体流程
1. 第一个接触到事件对象的是window -> document -> html -> body -> ... -> 目标元素
## event对象的常见应用
- event.targrt
- event.currentTarget
- keyCode
- pageX/pageY
- event.offsetX、event.offsetY
## 自定义事件
```
var eve= new Event('custome)
ev.addEventListener('custome',function() {
    console.log('custome')
})
ev.dispathchEvent(eve)
```

## 事件委托
事件委托，通俗地来讲，就是把一个元素响应事件（click、keydown......）的函数委托到另一个元素； 
一般来讲，会把一个或者一组元素的事件委托到它的父层或者更外层元素上，真正绑定事件的是外层元素。  
当事件响应到需要绑定的元素上时，会通过事件冒泡机制从而触发它的外层元素的绑定事件上，然后在外层元素上去执行函数。
在父元素div上绑定事件，点击li也会响应
```
<div>
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>
```