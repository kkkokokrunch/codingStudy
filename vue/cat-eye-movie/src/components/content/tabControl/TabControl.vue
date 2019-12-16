<template>
  <div class="movie-menu">
    <router-link to="/" tag="div" class="city-name">
      <span>南昌</span><i class="iconfont icon-lower-triangle"></i>
    </router-link>
    <div class="hot-swtich">
      <router-link to="/movie/nowPlaying" tag="div" class="hot-item">正在热映</router-link>
      <router-link to="/movie/comingSoon" tag="div" class="hot-item">即将上映</router-link>
    </div>
    <router-link to="/" tag="div" class="search-entry">
      <i class="iconfont icon-sousuo"></i>
    </router-link>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="stylus" scoped>
.movie-menu
  width 100%
  height 45px
  line-height 45px
  border-bottom 1px solid #ececec
  display flex
  justify-content space-between
  align-items center
  margin-top 50px
  .city-name
    margin-left 20px
    
  .hot-swtich
    display flex
    .hot-item
      font-size 15px
      color #666
      width 80px
      text-align center
      margin 0 12px
      font-weight 700
    .router-link-active
      color #ef4238
      border-bottom 2px #ef4238 solid
  .search-entry
    margin-right 20px
    i 
      font-size 24px
      color red
// .movie_menu .city_name.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
// .movie_menu .city_name.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
// .movie_menu .search_entry.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
// .movie_menu .search_entry.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}


</style>