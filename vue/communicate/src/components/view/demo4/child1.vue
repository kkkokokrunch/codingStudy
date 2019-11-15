<template>
  <div class="child">
      <h3>兄弟组件1(监听兄弟组件2)</h3>
      <div>
          我是从child2传来的数据：{{msg}}
      </div>
  </div>
</template>

<script>
import Bus from '@/assets/bus'
export default {
    // props:['title']
    data() {
        return {
            msg:''
        }
    },
    mounted() {
        Bus.$on('test',data => {
            this.msg = data
        }) //接收child1发送到bus中的test方法
    }
}
</script>

<style>

</style>