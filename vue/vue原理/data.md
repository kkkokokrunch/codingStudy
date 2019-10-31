## data
### 为什么data必须是一个函数？
```
<template>
    <div class="title">
        <h1>按钮被点击了{{ count }}次</h1>
        <button v-on:click="count++">点击</button>
    </div>
</template>
<script>
    export default {
      name: 'BtnCount',
      data () {
        return {
          count: 0
        }
      }
    }
</script>
<style scoped>
    .title {
        background-color: red
    }
</style>
```
将这个组件复用三次，如果data不是函数，而是一个对象，那么每次点击一个按钮时，另外两个的值都会受影响。


类比引用数据类型

Object是引用数据类型,如果不用function 返回,每个组件的data 都是内存的同一个地址,一个数据改变了其他也改变了;
javascipt只有函数构成作用域(注意理解作用域,只有函数的{}构成作用域,对象的{}以及 if(){}都不构成作用域)，data是一个函数时，每个组件实例都有自己的作用域，每个实例相互独立,不会相互影响


