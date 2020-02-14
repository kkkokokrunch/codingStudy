<template>
  <div class="bottom-bar">
        <van-tabbar v-model="active">
            <van-tabbar-item name="home" icon="home-o">标签</van-tabbar-item>
            <van-tabbar-item name="search" icon="search">标签</van-tabbar-item>
            <van-tabbar-item name="cart" icon="shopping-cart-o" @click="addToCart">购物车</van-tabbar-item>
            <van-tabbar-item name="buy" icon="balance-list-o">购买</van-tabbar-item>
        </van-tabbar>
  </div>
</template>

<script>
export default {
    name:'DetailBottomBar',
    data() {
        return {
            active: 'home'
            }
  },
  methods: {
      addToCart() {
          this.$emit('addCart')
      }
  },
}
</script>

<style scoped>
.bottom-bar {
    height: 49px;
    background-color: pink;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    /* bottom: 49px; */
    z-index: 99;
    
}

</style>