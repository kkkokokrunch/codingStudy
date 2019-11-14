<template>
  <div class="container">
      <h2>父组件</h2>
      <p>从子组件传来的消息为：
          <span class="pink">{{msg}}</span>
      </p>

      <child @message="getMsg"></child>
  </div>
</template>

<script>
import child from './child'
export default {
    components: {
        child
    },
    data() {
        return {
            msg:''
        }
    },
    methods: {
        getMsg(e) {
            this.msg = e
        }
    }
}
</script>

<style>
.pink {
    color: pink
}
</style>