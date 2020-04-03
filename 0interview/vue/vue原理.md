## vue原理

### MVVM的理解

传统的前端会将数据手动渲染到页面上，MVVM模式则不需要用户收到操作dom元素，将数据绑定到viewModel层上，会自动将数据渲染到页面上，视图变化会通知viewModel层更新数据。viewModal就是MVVM模式中的桥梁。

### vue的响应式原理

1. 核心点：Object.defineProperty
2. 默认vue在初始化数据时，会给data中的属性使用Object.defineProperty重新定义所有属性，当页面取到对应属性时，会进行依赖收集，收集当前组件的watcher，如果属性发生变化，会通知相关依赖进行更新操作。

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
        name: "why"
      };

      Object.keys(obj).forEach(key => {
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
          }
        });
      });

      //发布订阅模式
      class Dep {
        constructor() {
          this.subs = [];
        }

        addSub(watcher) {
          this.subs.push(watcher);
        }

        notify() {
          this.subs.forEach(item => {
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
            name: "why"
          };
        }
      });
    </script>
  </body>
</html>
```



### Vue如何检测数组变化

1. 使用函数劫持的方式，重写了数组的方法
2. vue将data中的数组进行了原型链重写，让它指向了自己定义的数组原型方法，这样当调用数组api时，可以通知依赖更新。如果数组中包含了引用类型，会对数组中的引用类型再次进行监控