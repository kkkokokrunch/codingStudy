<template>
  <div class="search-box">
    <i class="icon icon-search">&#xe638;</i>
    <input ref="query" type="text" class="box" v-model="query"  :placeholder="placeholder">
    <i class="icon icon-dismiss" v-show="query" @click="clear">&#xe656;</i>
  </div>
</template>

<script>
//引入util.js中方法
import { debounce } from '@/common/util'
export default {
  props: {
    placeholder: {
      type: String,
      default: '搜素歌曲、歌手'
    }
  },
  data() {
    return {
      query: ''
    }
  },
  created() {
    this.$watch('query', debounce((newQuery) => {
      this.$emit('query', newQuery)
    }, 300))
  },
  methods: {
    blur() {
     this.$refs.query.blur()
    },
    //点击x删除搜索框内容
    clear (){
      this.query = ''
    },
    setQuery(query) {
      this.query = query
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../assets/css/function'
.search-box 
  display flex
  align-items center
  box-sizing border-box
  width 100%
  padding 0 px2rem(8px)
  height px2rem(74px)
  background #f0f5f9
  border-radius 6px
  .icon-search 
    font-size 24px
    color #6b6a6a
  .box 
    flex 1
    margin 0 5px
    line-height px2rem(36px)
    background #f0f5f9
    color #000
    font-size 14px
    outline 0
    &:placeholder 
      color hsla(0, 0%, 100%, 0.3)
  .icon-dismiss 
    font-size 20px
    margin-right px2rem(10px)
    color #6b6a6a
</style>