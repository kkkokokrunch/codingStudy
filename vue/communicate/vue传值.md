## vue的三种传值方式

### 1.父传子  
1. 在父组件上自己起个属性名（这里是sendMsg），绑定要传给子组件的值
```
<div class="container">
    <child :sendMsg = "myMsg"></child>
</div>

data() {
        return {
            myMsg:'This is father msg'
        }
    },
  
```
2. 在子组件中用props接收一下  
```
props:['sendMsg']
```
3. 就可以在template中直接使用sendMsg这个数据啦
### 2.子传父

### 3.兄弟组件传值