<template>
  <div class="zh-swiper">
    <div class="swiper">
      <slot></slot>
    </div>
    <slot name="indicator"></slot>
    <div class="indicator">
      <slot name="indicator">

      </slot>
    </div>
  </div>


</template>

<script>
export default {
  name:"Swiper",
  props: {
    interval: {
      type:Number,
      default:3000
    },
    animDuration: {
      type:Number,
      default:300
    },
    moveRatio: {
      type:Number,
      default:0.25
    },
    showIndicator: {
      type:Boolean,
      default:true
    }
  },
  data() {
    return {
      slideCount:0, //元素个数
      totalWidth:0, //swiper宽度
      swiperStyle: {},
      currentIndex:1,//当前的index
      scrolling:false
    }
  },
  mounted: function() {

  },
  methods: {
    //设置定时器
    startTimer() {
      this.palyTimer = window.setInterval(()=> {
        this.currentIndex++

      },this.interval)
    },
    //取消定时器的方法
    stopTimer() {
      window.clearInterval(this.palyTimer)
    },
    
    //滚动到正确的位置
    scrollContent(currentPosition) {
      this.scrolling = true
      
    }

  },
}
</script>

<style>

</style>