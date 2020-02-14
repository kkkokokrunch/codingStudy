<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行', '新款', '精选']"
                   @tabClick="tabClick"
                   ref="tabControl1"
                   class="tab-control"
                   v-show="isTabFixed"/>
    <scroll class="content" 
    ref="scroll" 
    :probe-type="3" 
    :pull-up-load="true"
    @scroll="contentScroll"
    @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control :titles="['流行', '新款', '精选']"
                   @tabClick="tabClick"
                   ref="tabControl2"/>
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
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
  import {itemListenerMixin} from '../../common/mixin'
  import {debounce} from '../../common/utils'
  import HomeSwiper from '../home/childComps/HomeSwiper'
  import RecommendView from '../home/childComps/RecommendView'
  import FeatureView from '../home/childComps/FeatureView'
  import TabControl from '../../components/content/tabControl/TabControl'
  import GoodsList from '../../components/content/goods/GoodsList'
  import BackTop from '../../components/content/backTop/BackTop'
  import Scroll from '../../components/common/scroll/Scroll'
  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    mixins:[itemListenerMixin],
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
            pop: {page: 0, list: []},
            new: {page: 0, list: []},
            sell: {page: 0, list: []},
          },
           currentType: 'pop',
           isShowBackTop:false,
           tabOffsetTop:0,
           isTabFixed:false,
           saveY:0,
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    activated() {
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      //1.保存y值
      this.saveY = this.$refs.scroll.scroll.y

      //2.取消全局事件的监听
        this.$bus.$off('itemImageLoad',this.itemImgListener)
    },
    created() {
      this.getHomeMultidata(),
      this.getHomeGoods('pop'),
      this.getHomeGoods('new'),
      this.getHomeGoods('sell')
    },
    mounted() {},
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
        this.$refs.tabControl1.currentIndex = index 
        this.$refs.tabControl2.currentIndex = index
      },
      backClick() {
        this.$refs.scroll.scrollTo(0,0,500)
      },
      contentScroll(position) {
        //1.判断backtop是否显示
       this.isShowBackTop = (-position.y) > 1000

       //2.判断tabControl是否吸顶
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
      },
      swiperImageLoad() {
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop //$el可以拿到组件的具体元素
      },
      /**
       * 网络请求相关的方法
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // this.result = res;
          // console.log(res.data)
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          this.$refs.scroll.finishPullUp()
        })
      },
    }
  }
</script>

<style scoped>
  #home {
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
    box-sizing: border-box;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #ffffff;
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tab-control {
    position: relative;
    z-index: 9
  }
</style>