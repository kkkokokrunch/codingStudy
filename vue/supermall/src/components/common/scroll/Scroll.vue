<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'Scroll',
    props: {
        probeType: {
            type:Number,
            default:0
        }
    },
    data() {
        return {
            scroll:null
        }
    },
    mounted() {
        //1.创建bscroll对象
        this.scroll = new BScroll(this.$refs.wrapper,{
            probeType:this.probeType,
            pullUpLoad:true,
            click:true
        })
        //2.监听滚动的位置
        this.scroll.on('scroll',(position) => {
            //自定义事件，向外抛出
            this.$emit('scroll',position)
        })
    },
    methods: {
        scrollTo(x,y,time=300) {
             this.scroll.scrollTo(x,y,time)
        }
    },
}
</script>

<style>

</style>