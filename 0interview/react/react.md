## 父子组件传值

1. 父组件向子组件传值

   ```jsx
   <TodoItem content={item} index={index} deleteItem={this.handleItemDelete} />
   ```

   content 和 index 都是父组件要传给子组件的值，在子组件中只要用 this.props.content/index 接收一下  
   传递方法也一样

2. 子组件向父组件传值
   在这个例子中，子组件要将自己每个 item 的 index 传给父组件，首先，父组件将删除 item 的方法传给子组件
   就是 deleteItem={this.handleItemDelete}  
   在子组件中 deleteItem(index)，通过调用父组件传来的函数，将子组件的数据作为形参给这个函数使用





## props state 和 render

当组件的 props 和 state 发生改变时，render 函数就会重新执行。  
父组件的 render 被运行时，它的子组件的 render 也会被重新运行







## 虚拟 DOM

1. 准备 state 数据

2. 准备 JSX 模板

3. 数据+模板 生成虚拟 DOM（虚拟 DOM 就是一个 JS 对象，用来描述真实 DOM）（损耗了性能）
   JSX -> createElement -> 虚拟 DOM -> 真实 DOM

   ```javascript
   ["div", { id: "abc" }, ["span", {}, "hello world"]];
   ```

4. 用虚拟 DOM 的结构生成真实的 DOM 来显示

   ```html
   <div id="abc">
     <span>hello world</span>
   </div>
   ```

5. state 变化

6. 数据+模板生成新的虚拟 DOM（极大地提升了性能）

   ```js
   ["div", { id: "abc" }, ["span", {}, "hello world"]];
   ```

7. 比较原始虚拟 DOM 和新的虚拟 DOM，找到区别的 span 的内容（极大地提升了性能）

8. 直接操作 DOM，改变 span 中的内容

虚拟 DOM 的优点：

1. 性能提升
2. 使得跨端应用得以实现（React Native）





### diff 算法

就是比对原始虚拟 DOM 和新的虚拟 DOM 的区别的算法  
他是比较同层的节点，如果发现某一层的虚拟 DOM 不一样，下面就不会继续进行比较

#### 为什么 key 值最好不要是 index？

因为 key 值是 index，就无法保证原始虚拟 DOM 和新的虚拟 DOM 的 key 值一致。







## 生命周期函数

#### Initialization（初始化）

初始化props和state

#### Mounting（挂载）

1. componentWillMount：组件即将被挂载到页面时调用（也就是还没挂载到页面上）只执行一次

2. render

3. componentDidMount：组件被挂载到页面之后执行，只执行一次

   可以在这里发送ajax

#### Updating

props:

1. componentWillReceiveProps：只存在于子组件中，没有 props 不会被执行，如果这个组件第一次存在于父组件中，不会执行，如果之前已经存在于父组件中，才会执行

2. shouldComponentUpdate：组件更新之前会自动执行，要求返回一个布尔值

   可以利用这个函数减少render更新的次数，避免父组件更新时，子组件也一起更新

   ```javascript
   shouldComponentUpdate(nextProps,nextState) {
       if(nextProps.content !== this.props.content) {
           return true
       } else {
           return false
       }
   }
   ```

   

3. componentWillUpdate：组件更新之前会自动执行，如果 shouldComponentUpdate 返回 true 才会执行

4. render(必须要自己定义，因为Component中没有内置render)

5. componentDidUpdate：组件更新完成以后被执行

states：和 props 比，没有 componentWillReceiveProps

#### Unmounting

componentWillUnmount：这个组件即将被剔除时才会执行







### 关于 setState

## 为什么设计成异步

1. 可以显著提升性能
   - 如果每次调用setState都进行一次更新，那么render函数就会被频繁调用，界面会重新渲染，效率很低
2. 为了保证state和props同步
   - 如果同步更新state，但是还没有执行render函数，这是state和props不能保持一致，开发时会遇到很多问题

#### React 中 setState 什么时候是同步的，什么时候是异步的？

- 在组件生命周期或React合成事件中，setState是异步；
- 在setTimeout或者原生dom事件中，setState是同步；

这里所说的同步异步， 并不是真正的同步异步， 它还是同步执行的。
这里的异步指的是多个 state 会合成到一起进行批量更新。

如果连续调用三次 setState，变更三组数据，如果 React 这时连续做三次虚拟 DOM 的比对，更新三次页面，如果这三次 setState 的时间间隔非常小，那么是非常浪费性能的。所以 React 会将这三次 setState 合并成一次，这样就只需要进行一次虚拟 DOM 的比对，更新一次页面，可以提高性能。

### 为什么最好在 setState 中传入一个函数？

https://www.oschina.net/translate/functional-setstate-is-the-future-of-react?print

setState实际是通过 Object.assign()来合并对象的，当你传入的对象有相同的key时，最后一个包含此key的对象会覆盖之前的对象。

所以应该使用函数，这样多个state合并时，每次遍历都会执行一次函数。

### setState 第二个参数

该函数会在 setState 函数调用完成并且组件开始重渲染的时候被调用，我们可以用该函数来监听渲染是否完成，在 vue 中可以用 nextTick 代替，也就是说我们可以通过第二个参数的回调函数来获取更新后的state

```javascript
changeText() {
  this.setState({
    message: "你好啊,李银河"
  }, () => {
    console.log(this.state.message); // 你好啊,李银河
  });
}
```

