<template>
  <div class="cinema">
        <nav-bar class="cinema-nav"><div slot="center">影院</div></nav-bar>
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
  .cinema 
    height 100vh
    position relative  
    .cinema-nav 
      background-color #E54847
      color #ffffff
      position fixed
      left 0
      right 0
      top 0
      z-index 9
  
</style>