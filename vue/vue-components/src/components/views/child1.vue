<template>
  <div class="child1">
    child1
    <button @click="send">派发事件</button>
  </div>
</template>

<script>
import bus from '@/bus/bus'
export default {
  data() {
    return {
      message:'我是child1中的数据'
    }
  },
  methods: {
    send() {
      // bus.$emit('test',this.message)
      this.$dispatch('test',this.message)
    }
  },
}
</script>

<style>

</style>