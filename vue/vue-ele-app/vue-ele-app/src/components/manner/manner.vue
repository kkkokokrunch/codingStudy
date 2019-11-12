<template>
    <div class="manner">
        <div class="total">
            全部<span>{{ratings.length}}</span>
        </div>
        <div class="satisfied">
            满意<span>{{posnum}}</span>
        </div>
        <div class="unsatisfied">
            不满意<span>{{ratings.length}}</span>
        </div>
    </div> 
</template>

<script>
export default {
   name:'manner',
   data() {
       return{
           posnum: 0
       }
   },
   props: {
       ratings: {
        type: Array,
        default() {
          return []
        }
      }
   },
   mounted(){
       
        //    let posnum = 0;
           for(let rating of this.ratings) {
               if(this.ratings.rating) {
                   for(let rateType of this.ratings.rating) {
                       if(rateType == 0){
                          this.posnum++
                       }
                    // console.log(rateType)
                   }
               }
           }
        return posnum
       
   }
   
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin.styl"
.manner
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

</style>