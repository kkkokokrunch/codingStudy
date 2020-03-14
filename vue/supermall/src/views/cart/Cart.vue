<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">
        购物车(
        <span>{{ length }}</span>
        )
      </div>
    </nav-bar>
    <!-- 购物车列表 -->
    <cart-list />
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import CartList from './children/CartList'
import {mapGetters} from 'vuex'
export default {
  name:'Cart',
  components: {
    NavBar,
    CartList
  },
  computed: {
    ...mapGetters({
      length:'cartLength'
    })
  }
}
</script>

<style scoped>
.cart {
  height: 110vh;
}
.nav-bar {
  color: white;
  background-color: #ff8198;
}
</style>