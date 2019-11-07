<template>
  <div class="user">
      我是用户页面
      <h2>{{userId}}</h2>
  </div>
</template>

<script>
export default {
    name:"User",
    computed: {
        userId() {
            return this.$route.params.abc
        }
    }
}
</script>

<style>

</style>