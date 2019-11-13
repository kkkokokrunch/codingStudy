<template>
    <div class="ratings"  ref="ratWrapper">
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
            <manner :ratings="ratings"></manner>
            <!-- 评论列表 -->
            <div class="rating-list">
                <ul>
                    <li v-for="(rating,index) in ratings" :key="index">
                        <!-- <span>{{item.username}}</span> -->
                        <div class="flex">
                            <div class="avatar">
                                <img width="28" height="28" :src="rating.avatar" alt="">
                            </div>
                            <div class="rating-main">
                                <div class="username">{{rating.username}}</div>
                                <div class="userdelivery">
                                    <star :size="24"></star>
                                    <span>{{rating.deliveryTime}}</span>
                                </div>
                                <div class="usertext">{{rating.text}}</div>
                                <div class="recommend" v-show="rating.recommend.length">
                                    <span class="icon-thumb_up"></span>
                                    <span class="item" v-for="(item,index) in rating.recommend" :key="index">
                                        {{item}}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="ratingTime">
                            {{format(rating.rateTime)}}
                        </div>
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
    import manner from '../manner/manner'
    import moment from 'moment'
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
            return {
                ratings: []
            }
        },
        methods: {
            format(time) {
                return moment(time).format('YYYY-MM-DD hh:mm')
            },
            _initScroll() {
                this.ratScroll = new BScroll(this.$refs.ratWrapper, {
                    click: true
                })
            },
        },
        created() {
            this.$http.get('http://localhost:8080/static/ratings.json')
                .then((res) => {
                    console.log(res)
                    if (res.data.errno == 0) {
                        this.ratings = res.data.data
                        this.$nextTick(() => {
                            this._initScroll()
                        })
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
    .rating-list 
        padding: 0 18px
        li
            display: flex
            padding: 18px 0
            border-bottom 1px solid #e6e7e8
            position relative
            .flex 
                display flex
                .avatar
                    width 28px
                    img 
                        border-radius 50%
                .rating-main
                    // flex 1
                    margin-left 12px    
                    .username
                        font-size 10px
                        color rgb(7,17,27)
                    .userdelivery
                        display flex
                        vertical-align bottom
                        .star
                            margin 4px 6px 6px 0
                        span 
                            font-size 10px
                            color #93999f
                            font-weight 200
                            line-height 12px
                    .usertext
                        font-size 12px
                        color rgb(7,17,27)
                        line-height 18px
                    .recommend
                        .item 
                            border 1px solid #e6e7e8
                            margin-right 8px
                            padding 2px 6px
                            font-size 9px
                            color #93999f
                            line-height 16px
                        .icon-thumb_up
                            font-size 12px
                            line-height 16px
                            color #00a0dc
                            margin-right 8px
            .ratingTime
                position absolute
                top 14px
                right 14px
                font-size 10px
                line-height 12px
                font-weight 200
                color #93999f
                

           


    
</style>