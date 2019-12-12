<template>
  <div id="app">
    <!-- <router-view/> -->
      <h2>------------info内容是否响应式------------</h2>
      <h2>{{$store.state.info}}</h2>
      <button @click="updateInfo">修改信息</button>
      <h2>------------我是App中的counter------------</h2>
      <h2>{{$store.state.counter}}</h2>

      <button @click="addition">+</button>
      <button @click="subtraction">-</button>
      <button @click="addCount(5)">+5</button>
      <button @click="addCount(10)">+10</button>
      <button @click="addStudent">添加学生</button>

      <h2>------------我是getters信息------------</h2>
      <h2>{{$store.getters.powerCounter}}</h2>
      <h2>{{$store.getters.more20stu}}</h2>
      <h2>{{$store.getters.more20stuLength}}</h2>

      <h2>------------我是HelloVuex中的counter------------</h2>
      <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
import {INCREMENT} from './vuex/mutation-types' 
export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data() {
    return {
      // counter:0
    }
  },
  methods: {
    addition() {
      this.$store.commit(INCREMENT)
    },
    subtraction() {
      this.$store.commit('decrement')
    },
    addCount(count) { //count参数被称作mutation的载荷payload
      this.$store.commit('incrementCount',count)
    },
    addStudent() {
      const stu = {id:5,name:'嘻嘻',age:12}
      this.$store.commit('addStudent',stu)
    },
    updateInfo() {
      this.$store.dispatch('aupdateInfo')
    }
  }
}
</script>

<style>
#app {

}
</style>
