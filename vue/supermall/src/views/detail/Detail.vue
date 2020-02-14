<template>
  <div id="detail">
      <detail-nav-bar class="detail-nav" ref="nav" @titleClick="titleClick"></detail-nav-bar>
      <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
        <detail-swiper :top-images='topImages'></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shops"></detail-shop-info> 
        <detail-images-info :images-info="detailsInfo" @imgLoad="imageLoad"></detail-images-info>
        <detail-param-info :param-info="paramsInfo" ref="param"></detail-param-info>
        <detail-comment-info :comment-info="commentInfo" class="detail-set-scroll" ref="comment"/>
        <goods-list :goods="recommendList" :is-recommend="true" class="detail-set-scroll" ref="recommend"/>
      </scroll>
        <back-top @click.native="backClick" v-show="isShowBackTop">fanhui</back-top>
        <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from '../detail/childComps/DetailNavBar'
import DetailSwiper from '../detail/childComps/DetailSwiper'
import DetailBaseInfo from '../detail/childComps/DetailBaseInfo'
import DetailShopInfo from '../detail/childComps/DetailShopInfo'
import DetailImagesInfo from '../detail/childComps/DetailImagesInfo'
import DetailParamInfo from '../detail/childComps/DetailParamInfo'
import DetailCommentInfo from '../detail/childComps/DetailCommentInfo'
import DetailBottomBar from '../detail/childComps/DetailBottomBar'

import GoodsList from '../../components/content/goods/GoodsList'

import Scroll from '../../components/common/scroll/Scroll'

import {getDetail,Goods,Shop,GoodsParams,getRecommend} from '../../network/detail'
import {debounce} from '../../common/utils'
import {itemListenerMixin,backTopMixin} from '../../common/mixin'
export default {
    name:'Detail',
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scroll,
        DetailImagesInfo,
        DetailParamInfo,
        DetailCommentInfo,
        GoodsList,
        DetailBottomBar
    },
    mixins:[itemListenerMixin,backTopMixin],
    data() {
        return {
            iid:null,
            topImages:[],
            goods:{},
            shops: {},
            detailsInfo:{},
            paramsInfo: {},
            commentInfo: {},
            recommendList: [],
            themeTopYs:[],
            currentIndex:0
        }
    },
    created() {
        //1.保存传入的iid
        this.iid = this.$route.params.iid
        //2.根据iid请求详情数据
        this.getDetail()
        //3. 请求推荐数据
        this.getRecommend();
    },
    mounted() {
        
        },
    updated() {
        // this.themeTopYs = [] 
        // this.themeTopYs.push(0)
        // this.themeTopYs.push(this.$refs.param.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
    },
    destroyed() {
        this.$bus.$off('itemImageLoad',this.itemImgListener)
    },
    methods: {
        imageLoad() {
            this.$refs.scroll.refresh()
            this.themeTopYs = [] 
            this.themeTopYs.push(0)
            this.themeTopYs.push(this.$refs.param.$el.offsetTop-50)
            this.themeTopYs.push(this.$refs.comment.$el.offsetTop-50)
            this.themeTopYs.push(this.$refs.recommend.$el.offsetTop-50)
            this.themeTopYs.push(Number.MAX_VALUE)
            console.log(this.themeTopYs)
        },
        getDetail() {
            getDetail(this.iid).then(res => {
                console.log(res)
                const data = res.result
                //1.获取顶部轮播数据
                this.topImages = data.itemInfo.topImages

                //2.获取商品信息
                this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

                // 获取店铺数据
                this.shops = new Shop(data.shopInfo);

                // 获取下面的图片展示数据
                this.detailsInfo = data.detailInfo;

                // 获取尺寸数据
                this.paramsInfo = new GoodsParams(data.itemParams.info, data.itemParams.rule || {});

                // 获取评论数据
                if (data.rate.cRate !== 0) {
                this.commentInfo = data.rate.list[0] || {};
                }

            })
        },
        // 请求推荐数据
        getRecommend() {
            getRecommend().then(res => {
                // console.log(res);
                this.recommendList = res.data.list;
            });
        },
        
        titleClick(index) {
            console.log(index)
            this.$refs.scroll.scrollTo(0,-(this.themeTopYs[index]),100)
        },
        contentScroll(position) {
            const positionY = -position.y

            let length = this.themeTopYs.length
            for(let i = 0;i < length-1; i++) {
                if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])) {
                    this.currentIndex = i
                    this.$refs.nav.currentIndex = this.currentIndex
                }
            }

             this.isShowBackTop = (-position.y) > 1000
        },
        addToCart() {
            //1.获取商品信息
            const product = {}
            product.image = this.topImages[0]
            product.title = this.goods.title
            product.desc = this.goods.desc
            product.price = this.goods.realPrice
            product.iid = this.iid

            //2.将商品加到购物车
            this.$store.dispatch('addCart',product)
        }
    },
    
}
</script>

<style scoped>
#detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
}
.detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
}
.content {
    /* height: calc(100% - 44px); */
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
}

</style>