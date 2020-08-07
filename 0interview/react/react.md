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

这里所说的同步异步， 并不是真正的同步异步， 它还是同步执行的。这里的异步指的是多个 state 会合成到一起进行批量更新。

可以用shouldComponentUpdate阻止不必要的render（具体方法见下面生命周期）

但是在每个组件里面都写SCU是不现实的，可以令组件继承PureComponent,这样组建内部自动就会有SCU



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

## React渲染流程

JSX ->虚拟DOM ->真实DOM

## React更新流程

props/state改变 =》render函数重新执行 =》产生新的DOM树 =》新旧DOM树进行diff对比 =》计算出差异进行更新 =》更新到真实DOM

### diff 算法

就是比对原始虚拟 DOM 和新的虚拟 DOM 的区别的算法  
他是比较同层的节点，如果发现某一层的虚拟 DOM 不一样，下面就不会继续进行比较



### key的作用

- 星际穿越 key=111
- 盗梦空间 key=222

和

- 大话西游 key=333
- 星际穿越 key=111
- 盗梦空间 key=222

diff算法在进行对比时，会将key=111和222 的元素进行位移，而不用修改，再将key=333的元素插入到最前面的位置即可

#### 为什么 key 值最好不要是 index？

因为 key 值是 index，就无法保证原始虚拟 DOM 和新的虚拟 DOM 的 key 值一致。上面说的111和222会变成222和333



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



## 获取ref

1. refs

   ```jsx
   <h2 ref="titleRef">hello<h2/>
   {/*获取dom*/}
   this.refs.titleRef
   ```

2. 通过createRef()

   ```jsx
   constructor(props) {
       this.titleRef = createRef()
   }
   <h2 ref={this.titleRef}>hello<h2/>
   {/*获取dom*/}
   this.titleRef.current
   ```

3. 通过回调函数

   ```jsx
    constructor(props) {
       this.titleEl = null;
     }
   <h2 ref={element => this.titleEl = element}>Callback Ref</h2>
   {/*获取dom*/}
   this.titleEl.innerHTML = "你好啊,李银河";
   ```



### this指向

在react中，因为使用了class语法，所有在class中生命的方法会自动使用严格模式。

当你使用 `onClick={this.handleClick}`来绑定事件监听函数的时候，`handleClick` 函数实际上会作为回调函数，传入 `addEventListener()` 。由于是回调函数，没有显示的调用者，所以会指向undefined。

这就是为什么你在 React 的组件中添加事件处理函数为什么会得到 `undefnied` 而不是全局对象或者别的什么东西。

所以要用bind显示绑定this到当前的组件上。



























