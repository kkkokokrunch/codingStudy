<template>
  <tab-bar>
    <tab-bar-item path="/movie">
      <img slot="item-icon" src="../../../assets/img/movie.png" alt="">
      <img slot="item-icon-active" src="../../../assets/img/movieSelect.png" alt="">
      <div slot="item-text">电影</div>
    </tab-bar-item>
    <tab-bar-item path="/cinema">
      <img slot="item-icon" src="../../../assets/img/cinema.png" alt="">
      <img slot="item-icon-active" src="../../../assets/img/cinemaSelect.png" alt="">
      <div slot="item-text">影院</div>
    </tab-bar-item>
    <tab-bar-item path="/user">
      <img slot="item-icon" src="../../../assets/img/user.png" alt="">
      <img slot="item-icon-active" src="../../../assets/img/userSelect.png" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '../../common/tabbar/TabBar'
  import TabBarItem from '../../common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
