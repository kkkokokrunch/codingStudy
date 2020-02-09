<template>
  <div id="detail">
      <detail-nav-bar class="detail-nav"></detail-nav-bar>
      <scroll class="content" ref="scroll">
        <detail-swiper :top-images='topImages'></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shops"></detail-shop-info> 
        <detail-images-info :images-info="detailsInfo" @imageLoad="imageLoad"></detail-images-info>
        <detail-param-info :param-info="paramsInfo"></detail-param-info>
        <!-- <detail-comment-info :comment-info="commentInfo" class="detail-set-scroll" /> -->
      </scroll>
  </div>
</template>

<script>
import DetailNavBar from '../detail/childComps/DetailNavBar'
import DetailSwiper from '../detail/childComps/DetailSwiper'
import DetailBaseInfo from '../detail/childComps/DetailBaseInfo'
import DetailShopInfo from '../detail/childComps/DetailShopInfo'
import DetailImagesInfo from '../detail/childComps/DetailImagesInfo'
import DetailParamInfo from '../detail/childComps/DetailParamInfo'
// import DetailCommentInfo from '../detail/childComps/DetailCommentInfo'

import Scroll from '../../components/common/scroll/Scroll'

import {getDetail,Goods,Shop,GoodsParams} from '../../network/detail'
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
        // DetailCommentInfo
    },
    data() {
        return {
            iid:null,
            topImages:[],
            goods:{},
            shops: {},
            detailsInfo:{},
            paramsInfo: {},
            commentInfo: {},
        }
    },
    created() {
        //1.保存传入的iid
        this.iid = this.$route.params.iid

        //2.根据iid请求详情数据
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
    methods: {
        imageLoad() {
            this.$refs.scroll.refresh()
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
    height: calc(100% - 44px);
}

</style>