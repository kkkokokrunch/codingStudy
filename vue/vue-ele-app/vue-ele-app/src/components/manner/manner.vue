<template>
    <div class="manner">
        <div class="top">
            <div class="total">
                全部<span>{{ratings.length}}</span>
            </div>
            <div class="satisfied">
                满意<span>{{postive.length}}</span>
            </div>
            <div class="unsatisfied">
                不满意<span>{{negtive.length}}</span>
            </div>
        </div>
        <div class="choose">
            <span class="icon-check_circle" :class="{grey: isshow,green: !isshow}" @click="isshow=!isshow"></span>
            <span class="choose-text">只看有内容的评价</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'manner',
        data() {
            return {
                posnum: 0,
                isshow: true
            }
        },
        props: {
            ratings: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        computed: {
            postive() {
                return this.ratings.filter((rating) => {
                    return rating.rateType === 0
                })
            },
            negtive() {
                return this.ratings.filter((rating) => {
                    return rating.rateType === 1
                })
            }
        },
        methods: {
            // change() {
            //     this.isActive = !this.isActive
            // }
        },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin.styl"
.manner
    .top
        display flex
        padding 18px 0
        margin 0 18px
        border-bottom 1px solid #e6e7e8
        box-sizing border-box
        .total
            background-color #00a0dc
            padding 8px 12px
            color #ffffff
            margin-right 8px
            font-size 12px
            span
                font-size 8px
        .satisfied
            background-color #ccecf8
            padding 8px 12px
            color #4d555d
            margin-right 8px
            font-size 12px
            span
                font-size 8px
        .unsatisfied
            background-color #e9ebec
            padding 8px 12px
            color #4d555d
            font-size 12px
            span
                font-size 8px
    .choose
        display flex
        align-items: center
        padding: 12px 18px
        border-bottom 1px solid #e6e7e8
        .icon-check_circle  
            // color #b7bbbf
            font-size 24px
            line-height 24px
        .grey
            color #b7bbbf
        .green
            color #1bda32
        .choose-text
            margin-left 5px
            font-size 12px
            color #b7bbbf
            line-height 24px
            

</style>