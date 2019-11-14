<template>
  <div class="child">
      <h2>子组件</h2>
      <p>the message from father is:</p>
      <strong>{{sendMsg}}</strong>

      <p class="hr"></p>

      <p>the changeMessage from child is:</p>
      <strong>{{changeMsg}}</strong>
  </div>
</template>

<script>
export default {
    props:['sendMsg'],
    computed: {
        changeMsg() {
            return this.sendMsg.toUpperCase() //将父组件传来的数据全部变为大写
            // 当数据源中的数据需要更新时，可以用computed
        }
    }
}
</script>

<style>
.hr {
    margin: 50px 0;
}
</style>