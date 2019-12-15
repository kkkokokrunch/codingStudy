<template>
  <div class="movie">
        <nav-bar class="movie-nav"><div slot="center">猫眼电影</div></nav-bar>
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
  .movie 
    height 100vh
    position relative  
    .movie-nav 
      background-color #E54847
      color #ffffff
      position fixed
      left 0
      right 0
      top 0
      z-index 9
  
</style>