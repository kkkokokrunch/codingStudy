<template>
    <div class="manner">
        <div class="rating-type border-1px">
            <span class="block positive" :class="{active: selectType===2}" @click="setType(2, $event)">
            全部<span class="count">{{ratings.length}}</span>
            </span>
            <span class="block positive" :class="{active: selectType===0}" @click="setType(0, $event)">
            满意<span class="count">{{postive.length}}</span>
            </span>
            <span class="block negative" :class="{active: selectType===1}" @click="setType(1, $event)">
           不满意<span class="count">{{negtive.length}}</span>
            </span>
        </div>
        <div class="choose" :class="{on: onlyContent}" @click="switchOnlyContent">
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
            },
            selectType: {
                type: Number,
                default: 2
            },
            onlyContent: {
                type: Boolean,
                default: false
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
            setType(type, event) {
                this.$emit('setSelectType', type)
            },
            switchOnlyContent(event) {
                this.$emit('switchOnlyContent')
            }
        },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin.styl"
    .manner
        .rating-type
            padding: 18px 0
            margin: 0 18px
            border-1px(rgba(7, 17, 27, 0.1))
            font-size: 0
            .block
                display: inline-block
                padding: 8px 12px
                margin-right: 8px
                line-height: 16px
                border-radius: 1px
                font-size: 12px
                color: rgb(77, 85, 93)
                &.active
                    color: #fff
                .count
                    margin-left: 2px
                    font-size: 8px
                &.positive
                    background: rgba(0, 160, 220, 0.2)
                    &.active
                        background: rgb(0, 160, 220)
                &.negative
                    background: rgba(77, 85, 93, 0.2)
                    &.active
                        background: rgb(77, 85, 93)
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