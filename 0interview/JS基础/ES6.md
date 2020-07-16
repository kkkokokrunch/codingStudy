## for in 和 for of
### for in遍历对象
for in遍历数组的问题
1. index索引为字符串型数字，不能直接进行几何运算
2. 遍历顺序有可能不是按照实际数组的内部顺序  
3. 使用for in会遍历数组所有的可枚举属性，包括原型。例如原型方法method和name属性  所以for in更适合遍历对象，不要使用for in遍历数组。

### for of遍历数组等有迭代器的对象
1. for in遍历的是数组的索引（即键名），而for of遍历的是数组元素值。for of遍历的只是数组内的元素，而不包括数组的原型属性method和索引name。
   ```
   Object.prototype.method=function(){
    　　console.log(this);
    }
    var myObject={
    　　a:1,
    　　b:2,
    　　c:3
    }
    for (var key in myObject) {
        console.log(key);
    }
    ```

## Object.keys()
Object.keys()方法可以遍历对象key值，并且以数组的形式返回