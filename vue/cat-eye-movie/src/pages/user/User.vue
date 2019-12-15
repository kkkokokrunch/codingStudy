<template>
  <div class="user">
        <nav-bar class="user-nav"><div slot="center">我的</div></nav-bar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
export default {
  components: {
    NavBar
  }
}
</script>

<style lang="stylus" scoped>
  .user 
    height 100vh
    position relative  
    .user-nav 
      background-color #E54847
      color #ffffff
      position fixed
      left 0
      right 0
      top 0
      z-index 9
  
</style>