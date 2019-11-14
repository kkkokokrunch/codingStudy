<template>
  <div class="seller" ref="sellerWrapper">
    <div class="seller-content">
      <!-- 第一部分 -->
      <div class="detail">
        <div class="detail-top">
          <span class="name">{{seller.name}}</span>
          <div class="rating">
            <star :size="36" :score="seller.score"></star>
            <span class="ratingCount text">{{seller.ratingCount}}</span>
            <span class="sellercount text">月售{{seller.sellCount}}单</span>
          </div>
          <div class="like" @click="like">
            <span class="icon-favorite" :class="{'active':favorite}"></span>
            <span class="text">{{favoriteText}}</span>
          </div>
        </div>
        <div class="detail-bottom">
          <div class="bottom-content">
            <h4>起送价</h4>
            <span class="figure">{{seller.minPrice}}</span>元
          </div>
          <div class="bottom-content">
            <h4>商家配送</h4>
            <span class="figure">{{seller.deliveryPrice}}</span>元
          </div>
          <div class="bottom-content">
            <h4>平均配送时间</h4>
            <span class="figure">{{seller.deliveryTime}}</span>分钟
          </div>
        </div>
      </div>
      <interval></interval>
      <!-- 公告与活动 -->
      <div class="notice-activity">
        <div class="notice">
          <span class="notice-title">公告与活动</span>
          <div class="notice-content">{{seller.bulletin}}</div>
        </div>
        <ul class="supports">
          <li class="support-item" v-for="(item,index) in seller.supports" :key="index">
            <support-ico :size=4 :type="seller.supports[index].type"></support-ico>
            <span class="support-item-content">{{seller.supports[index].description}}</span>
          </li>
        </ul>
      </div>
      <interval></interval>
      <!-- 商家实景 -->
      <div class="scenery">
        <div class="scenery-title">商家实景</div>
        <div class="img-wrapper" ref="imgWrapper">
          <ul class="img-list" ref="ulWrapper">
            <li class="img-item"
                v-for="(img,index) in seller.pics"
                :key="index"
            >
              <img :src="img" width="120" height="90">
            </li>
          </ul>
        </div>
      </div>
      <interval></interval>
      <!--商家信息-->
      <div class="seller-information">
        <div class="information-title">商家信息</div>
        <ul>
          <li
          v-for="(info,index) in seller.infos"
          :key="index">
            {{info}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import star from '../star/star'
  import interval from '../interval/interval'
  import SupportIco from '../support-ico/support-ico'
  export default {
    components: {
      star,
      interval,
      SupportIco
    },
    data() {
      return {
      favorite: false,
      }
    },
    props: {
      seller: {
        type: Object
      }
    },
     computed: {
      favoriteText() {
        return this.favorite ? '已收藏' : '收藏'
      }
    },
    mounted(){
      //等到內容將div撑开之后，在对better-scroll的实例初始化
      //初始化的时机很重要
      this.$nextTick(()=>{
        this._initPics();    //商家实景的横向滚动
      });
    },
    watch:{
      //监听seller变量的值的变化在初始化
      //防止滚动不生效
      'seller'(){
        this.$nextTick(()=>{
          this._initPics();
        });
      }
    },
    methods:{
      //用于初始化“商家实景”的横向滚动效果
      _initPics(){
        //先判断是否有这个属性
        if(this.seller.pics){
          //这里之所以要设置宽度，是因为.pic-wrapper和.pic-list的宽度一样大
          //当.pic-list的宽度大于.pic-wrapper的宽度，才能横向滚动
          let picWidth = 120; //这里是设置每张图片的宽度
          let margin = 6;
          //width是所有图片的宽度和以及margin的大小和
          let width = (picWidth + margin)*this.seller.pics.length - margin;
          console.log(width);
          this.$refs.ulWrapper.style.width = width + 'px'; //设置.pic-list的宽度的宽度
          this.$nextTick(()=>{
            if(!this.picScroll){
              this.picScroll = new BScroll(this.$refs.imgWrapper,{
                scrollX:true,
                eventPassthrough:'vertical' //忽略竖直方向的滚动
              });
            }else{
              this.picScroll.refresh();
            }
          });
        }
        this.sellerScroll = new BScroll(this.$refs.sellerWrapper, {
          click: true
        })
      },
       like() {
        this.favorite = !this.favorite
        // saveToLocal(this.seller.id, 'favorite', this.favorite)
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin.styl"

.seller 
  position absolute
  top 174px
  bottom 0
  width 100%
  left 0
  overflow hidden
  .detail
    margin 0 18px
    padding 18px 0
    .detail-top
      position relative
      border-bottom 1px solid #e6e7e8
      .name
        font-size 14px
        line-height 14px
        color #07111b
      .rating
        display flex
        margin-top 8px
        .star
          margin-right 8px
          margin-bottom 18px
        .text
          font-size 10px
          line-height 16px
          color #6e747a
          margin-right 12px
      .like
        position absolute
        top 0px
        right 0px
        .icon-favorite
          display block
          font-size 24px
          line-height 24px
          color grey 
          margin-bottom 4px
          &.active
            color red
        .text
          font-size 10px
          line-height 10px
          color #6e747a
    .detail-bottom
      display flex
      padding-top 18px
      .bottom-content
        flex 1
        text-align center
        border-right 1px solid #e6e7e8
        font-size 10px
        color rgb(7,17,27)
        &:last-child
          border: none
        h4
          font-size 10px
          color #93999f
          line-height 10px
          margin-bottom 4px
        .figure
          font-size 24px
          font-weight 200
          line-height 24px
  .notice-activity
    margin 0 18px
    padding-top 18px
    .notice
      .notice-title
        font-size 14px
        line-height 14px
        color #07111b
      .notice-content
        padding 8px 12px 16px
        color #f01414
        font-size 12px
        font-weight 200
        line-height 24px
        border-bottom 1px solid #e6e7e8
    ul
      li
        display flex 
        border-bottom 1px solid #e6e7e8
        padding 16px 12px 16px 6px
        &:last-child
          border: none
        .support-ico
          
        .support-item-content
          padding-left 6px
          font-size 12px
          color #6e747a
          font-weight 200
          line-height 16px
  .scenery
    padding: 18px
    .scenery-title
      margin-bottom: 12px
      line-height: 14px
      color: #07111b
      font-size: 14px
    .img-wrapper
      width 100%
      overflow hidden
      white-space nowrap
      ul
        font-size 0
        width 100%
        li
          display: inline-block
          margin-right: 6px
          width: 120px
          height: 90px
          &:last-child
            margin: 0
  .seller-information
    padding: 18px
    .information-title
      margin-bottom: 12px
      line-height: 14px
      color: #07111b
      font-size: 14px
    ul
      li 
        border-top 1px solid #e6e7e8
        padding 16px 12px 16px 6px
        padding-left 6px
        font-size 12px
        color #000
        font-weight 200
        line-height 16px
</style>