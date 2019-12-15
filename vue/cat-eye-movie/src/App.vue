<template>
  <div id="app">
    <router-view/>
<main-tabbar></main-tabbar>
    <!-- <i class="iconfont icon-dianying"></i> -->
  </div>
</template>

<script>
import mainTabbar from './components/content/mainTabbar/mainTabbar'
export default {
  name: 'App',
  components: {
    mainTabbar
  }
}
</script>

<style>
 @import "./assets/css/base";
</style>
