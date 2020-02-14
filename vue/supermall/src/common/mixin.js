import {debounce} from './utils'
import BackTop from '../components/content/backTop/BackTop'

export const itemListenerMixin = {
    data() {
        return {
          // 监听图片
          itemImgListener: null
        };
      },
    mounted() {
        const refresh = debounce(this.$refs.scroll.refresh,200)
        this.itemImgListener = () => {refresh()}
        this.$bus.$on('itemImageLoad',this.itemImgListener)
        // this.$bus.$on('itemImgLoad',this.itemImgListener) 
        // console.log('我是混入的内容')
    }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
          isShowBackTop:false,
    }
  },
  // mounted() {
  //   console.log('hunru')
  // },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0,0,500)
    },
  }
}