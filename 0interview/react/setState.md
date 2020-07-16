## 关于 setState

### React 中的 state 为什么不能直接改变

1. 性能问题

这种直接改变原有对象的方式导致 react 无法对其进行任何优化，因此
会有潜在的性能问题

2. 很难定位问题

如果你用了 purecomponent， 会发现状态无法直接更新。
原因在于 purecomponent 重写了 SCU，SCU 中通过直接判断 state 和 props 前后的引用差别来判断，因此会
返回 false，导致 render 无法运行。（也就是无法 render）

#### React 中 setState 什么时候是同步的，什么时候是异步的？

这里所说的同步异步， 并不是真正的同步异步， 它还是同步执行的。
这里的异步指的是多个 state 会合成到一起进行批量更新。

如果连续调用三次 setState，变更三组数据，如果 React 这时连续做三次虚拟 DOM 的比对，更新三次页面，如果这三次 setState 的时间间隔非常小，那么是非常浪费性能的。所以 React 会将这三次 setState 合并成一次，这样就只需要进行一次虚拟 DOM 的比对，更新一次页面，可以提高性能。

### 为什么最好在 setState 中传入一个函数？

https://www.oschina.net/translate/functional-setstate-is-the-future-of-react?print
当传入的是对象是，setState 会将多个对象进行合并，然后再更新，在 JavaScript 中，“合并”或组合对象的方式是：如果三个对象具有相同的键，则传递给 Object.assign（）的最后一个对象的键值将作为该键最终的值。这样合并以后的 state 的值可能只是最后一个对象的值。  
使用函数可以避免这种情况，当 React 遇到“多次函数式 setState（）调用”时，React 按照“调用它们的顺序”对函数进行排队，而不是将对象合并在一起，（当然，并没有要合并的对象）。

之后，React 继续通过调用“队列”中的每个函数来更新状态。

### setState 第二个参数

该函数会在 setState 函数调用完成并且组件开始重渲染的时候被调用，我们可以用该函数来监听渲染是否完成，在 vue 中可以用 nextTick 代替

### 为什么使用 immutable？

因为在 react 中，我们不能去直接修改 state 的数据，所以最好对 state 做一层拷贝，但是如果碰上结构很复杂的数据，我们就需要做深拷贝，然而深拷贝一般是把所有节点全都复制一遍，这样性能消耗很大。
而 immutable 使用的是结构共享，对象树种一个节点变化，只会修改这个节点和受她影响的父节点，其他节点可以共享，这样可以提升性能。
