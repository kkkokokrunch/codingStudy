<template>
  <div class="hot">
    <home-swiper :banners="banners"/>
    <hot-nav></hot-nav>
    <grey-line></grey-line>
    <fresher-only></fresher-only>
    <grey-line></grey-line>
    <goods-list :goods="goods"></goods-list>
    <ul>
    </ul>
  </div>
</template>

<script>
import HomeSwiper from './HomeSwiper'
import HotNav from '../../../components/hotChildren/HotNav'
import greyLine from '../../../components/greyLine'
import FresherOnly from '../../../components/hotChildren/FresherOnly'
import GoodsList from '../../../components/hotChildren/GoodsList'
import {getBannersdata,getGoodesdata} from '../../../network/home'

export default {
    name:'Hot',
    components: {
      HomeSwiper,
      HotNav,
      greyLine,
      FresherOnly,
      GoodsList
    },
    data() {
      return {
        banners:[],
        goods:[]
      }
    },
    created() {
      this.getBannersdata()
      this.getGoodesdata()
    },
    methods: {
      getBannersdata() {
        getBannersdata().then(res => {
          this.banners = res.data
        })
      },
      getGoodesdata() {
        getGoodesdata().then(res => {
          this.goods = res
          // console.log(this.goods)
        })
      }
    },
}
</script>

<style scoped>
.hot {
  margin-top: 95px;
  margin-bottom: 55px;
}
</style>