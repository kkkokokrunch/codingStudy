<template>
   <div class="ratings">
       <div class="ratings-content">
           <!-- 总评价 -->
           <div class="top">
               <div class="top-left">
                    <h1 class="score">{{seller.score}}</h1>
                    <div class="total">综合评分</div>
                    <div class="percent">高于周边商家{{seller.rankRate}}</div>
               </div>
               <div class="top-right">
                   <div class="wrapper">
                       <div class="name">服务态度</div>
                        <star :size="36"></star>
                        <div class="score">{{seller.serviceScore}}</div>
                   </div>
                   <div class="wrapper">
                       <div class="name">商品评分</div>
                        <star :size="36"></star>
                        <div class="score">{{seller.foodScore}}</div>
                   </div>
                   <div class="time-wrapper">
                       <div class="name">送达时间</div>
                       <div class="time">{{seller.deliveryTime}}分钟</div>
                   </div>
               </div>
           </div>
           <!-- 灰色间隔 -->
           <interval></interval>
           <!-- 总评好评与差评数 -->
           <manner
           :ratings="ratings"></manner>
       </div>
   </div>
</template>

<script>
import BScroll from 'better-scroll'
import star from '../star/star'
import interval from '../interval/interval'
import manner from '../manner/manner'
export default {
    components: {
        star,
        interval,
        manner
    },
    props: {
        seller: {
        type: Object
        }
    },
    data() {
        return{
            ratings:[]
        }
    },
    created () {
        this.$http.get('http://localhost:8080/static/ratings.json')
        .then((res) => {
            console.log(res)
            if (res.data.errno == 0) {
            this.ratings = res.data.data
            }
        })
    }
   
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin.styl"
.ratings
    position absolute
    top 174px
    bottom 0
    width 100%
    left 0
    overflow hidden
    .top
        display flex
        padding 18px 0
        .top-left
            width 137px
            border-right 1px solid #cccccc
            text-align center
            .score
                font-size 24px
                color rgb(255,153,0)
                line-height 25px
                margin-bottom 6px
            .total
                font-size 12px
                color #07111b
                line-height 12px
                margin-bottom 8px
            .percent
                font-size 10px
                color #93999f
                line-height 10px
        .top-right
            .wrapper
                display flex
                align-items: center
                margin-left 24px
                margin-bottom 8px
                .name
                    font-size 12px
                    color #07111b
                    line-height 18px
                    // margin-bottom 8px
                .score
                    font-size 12px
                    color #ff9900
                    line-height 18px
                .star
                    margin: 0 12px   
            .time-wrapper
                display flex
                align-items: center
                margin-left 24px
                margin-bottom 8px
                .name
                    font-size 12px
                    color #07111b
                    line-height 18px
                    margin-right 12px
                .time
                    font-size 12px
                    color #93999f
                    line-height 18px
    // .manner
    //     margin 18px
    
</style>