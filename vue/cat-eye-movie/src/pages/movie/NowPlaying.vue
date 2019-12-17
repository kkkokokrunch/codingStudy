<template>
<div class="playing-wrapper" ref="playingWrapper">
	<div class="now-playing">     
      <movie-item :nowPlayingList="nowPlayingList"></movie-item>
  </div>
</div>
</template>

<script>
 import BScroll from 'better-scroll'
 import {getNowPlayingData} from "../../network/nowplaying"
 import MovieItem from "../../components/content/movieItem/MovieItem"
export default {
    components: {
		MovieItem,
    },
data() {
    return {
        nowPlayingList:[],
    }
},
created() {
    getNowPlayingData().then(res => {
          console.log(res.ms[0])
		  this.nowPlayingList = res.ms
        })
},
mounted(){
    this.$nextTick(() => {
        this.aBScroll = new BScroll(this.$refs.playingWrapper,{
			click:true
		})
    })   
},
methods: {
},
}
</script>

<style lang="stylus" scoped>
.playing-wrapper
	height 100%
	overflow hidden
	margin-top 100px
	margin-bottom 50px
	.now-playing
		// margin-top 100px
		// margin-top 200px
		// margin-bottom 50px
</style>