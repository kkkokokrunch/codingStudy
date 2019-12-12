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
1. 在子组件的数据源中定义数据
```
data() {
        return {
            msg:'我是子组件当中的数据'
        }
    }
```
2. 子组件向父组件发送数据要触发一个事件
```
 <button @click="sendMsg">send message</button>
```

3. 在子组件的methods中将这个事件用emit发送出去
```
methods: {
        sendMsg() {
            this.$emit('message',this.msg) //第一个参数是自己定义的方法，第二个是要发送的数据
        }
    }
```
4. 父组件中收到了这个message方法，并绑定一个方法
```
<child @message="getMsg"></child> 
```

5. 在父组件中写方法
```
 data() {
        return {
            msg:'' //2.在数据源中定义
        }
    },

 methods: {
        getMsg(e) {   //3.e就是子组件传来的数据
            this.msg = e //4.赋值给数据源
        }
    }
```
### 3.兄弟组件传值
1. 新建一个bus.js文件
```
import Vue from 'vue'

export default new Vue()
```
2. 同样用emit将方法抛出
```
 <button @click="sendMsg">send message</button>

 methods: {
        sendMsg() {
            // this.$emit('test',this.title)
            Bus.$emit('test',this.title) //将test方法抛出到bus中
        }        
    },
```
3. 用on接收一下抛出的数据
```
 mounted() {
        Bus.$on('test',data => {
            this.msg = data
        }) //接收child1发送到bus中的test方法
    }
```