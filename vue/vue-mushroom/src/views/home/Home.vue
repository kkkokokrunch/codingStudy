<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore"> -->
      <home-swiper :banners="banners"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control class="tab-control"
                   :titles="['流行', '新款', '精选']"
                   @tabClick="tabClick"/>
      <goods-list :goods="showGoods"/>
       <!-- <goods-list :goods="goods[curType].list" /> -->
    <!-- </scroll> -->
    <!-- <div>呵呵呵呵</div> -->
    <!-- <back-top @click.native="backClick" v-show="isShowBackTop"/> -->
  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar'
  import {
    getHomeMultidata,
    getHomeGoods
  } from '../../network/home'
  import HomeSwiper from '../home/childComps/HomeSwiper'
  import RecommendView from '../home/childComps/RecommendView'
  import FeatureView from '../home/childComps/FeatureView'
  import TabControl from '../../components/content/tabControl/TabControl'
  import GoodsList from '../../components/content/goods/GoodsList'
  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
            pop: {page: 0, list: []},
            new: {page: 0, list: []},
            sell: {page: 0, list: []},
          },
          // curType: "pop",
           currentType: 'pop',
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    created() {
      this.getHomeMultidata(),
      this.getHomeGoods('pop'),
      this.getHomeGoods('new'),
      this.getHomeGoods('sell')
    },
      methods: {
      /**
       * 事件监听相关的方法
       */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      // backClick() {
      //   this.$refs.scroll.scrollTo(0, 0)
      // },
      // contentScroll(position) {
      //   this.isShowBackTop = (-position.y) > 1000
      // },
      // loadMore() {
      //   this.getHomeGoods(this.currentType)
      // },
      /**
       * 网络请求相关的方法
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // this.result = res;
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          // this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style>
  #home {
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #ffffff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  
</style>