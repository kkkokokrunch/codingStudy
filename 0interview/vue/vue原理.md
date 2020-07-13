## vue 原理

### MVVM 的理解

传统的前端会将数据手动渲染到页面上，MVVM 模式则不需要用户收到操作 dom 元素，将数据绑定到 viewModel 层上，会自动将数据渲染到页面上，视图变化会通知 viewModel 层更新数据。viewModal 就是 MVVM 模式中的桥梁。

### vue 的响应式原理

1. 核心点：Object.defineProperty
2. 默认 vue 在初始化数据时，会给 data 中的属性使用 Object.defineProperty 重新定义所有属性，当页面取到对应属性时，会进行依赖收集，收集当前组件的 watcher，如果属性发生变化，会通知相关依赖进行更新操作。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  </head>
  <body>
    <!-- 
        1.app.message修改数据，vue内部是如何监听message数据的改变？
        *Object.defineProperty -> 监听对象属性的改变

        2.当数据发生改变，vue是如何知道要通知哪些人，界面发生刷新
        *发布订阅模式
     -->
    <div id="app">
      {{message}} {{name}}
    </div>

    <script>
      const obj = {
        message: "哈哈哈",
        name: "why",
      };

      Object.keys(obj).forEach((key) => {
        let value = obj[key];

        Object.defineProperty(obj, key, {
          set(newValue) {
            console.log("监听" + key + "改变");
            //告诉那些使用了的人
            value = newValue;
          },
          get() {
            console.log("获取" + key + "对应的值");
            //张三：get
            //李四：get
            //王五：get
            return value;
          },
        });
      });

      //发布订阅模式
      class Dep {
        constructor() {
          this.subs = [];
          dep的一个属性是subs;
        }

        addSub(watcher) {
          //subs中放着所有的watcher
          this.subs.push(watcher);
        }

        notify() {
          this.subs.forEach((item) => {
            item.update();
          });
        }
      }

      class Watcher {
        constructor(name) {
          this.name = name;
        }

        update() {
          console.log(this.name + "发生update");
        }
      }
      const dep = new Dep();

      const w1 = new Watcher("张三");
      dep.addSub(w1);

      const w2 = new Watcher("李四");
      dep.addSub(w2);

      const w3 = new Watcher("王五");
      dep.addSub(w3);

      dep.notify();
    </script>

    <script>
      const app = new Vue({
        el: "#app",
        data() {
          return {
            message: "哈哈哈",
            name: "why",
          };
        },
      });
    </script>
  </body>
</html>
```

## Vue 如何检测数组变化

1. 使用函数劫持的方式，重写了数组的方法
2. vue 将 data 中的数组进行了原型链重写，让它指向了自己定义的数组原型方法，这样当调用数组 api 时，可以通知依赖更新。如果数组中包含了引用类型，会对数组中的引用类型再次进行监控

## vue 双向数据绑定原理

vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty()来劫持各个属性的 setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

具体步骤：
第一步：需要 observe 的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter 和 getter 这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化

第二步：compile 解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图

第三步：Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁，主要做的事情是:

- 在自身实例化时往属性订阅器(dep)里面添加自己
- 自身必须有一个 update()方法
- 待属性变动 dep.notice()通知时，能调用自身的 update() 方法，并触发 Compile 中绑定的回调，则功成身退。

第四步：MVVM 作为数据绑定的入口，整合 Observer、Compile 和 Watcher 三者，通过 Observer 来监听自己的 model 数据变化，通过 Compile 来解析编译模板指令，最终利用 Watcher 搭起 Observer 和 Compile 之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据 model 变更的双向绑定效果。

## vue 生命周期

beforeCreate（初始化界面前）
created（初始化界面后）vue 实例初始化完成，但是页面还没有渲染 （父组件先 created，子组件后）
beforeMount（渲染 dom 前）
mounted（渲染 dom 后）页面已经渲染完成 （子组件先 mounted，父组件后）
beforeUpdate（更新数据前）
updated（更新数据后）
beforeDestroy（卸载组件前）
destroyed（卸载组件后）



## Object.defineProperty

#### Object.defineProperty的属性

1. get
2. set
3. configurable
4. enumerable
5. value
6. writable



#### Object.defineProperty的缺点

1. 无法监听数组变化
2. 只能劫持对象的属性，所以需要对每个对象的每个属性进行遍历，如果属性值也是对象，就要进行深度遍历，所以如果能接吃一个完整的对象就更好了

以上这些缺陷，proxy都可以解决

