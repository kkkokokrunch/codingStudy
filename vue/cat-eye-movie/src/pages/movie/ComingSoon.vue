<template>
  <div class="coming-soon">
      <div class="most-expected-wrapper">
        <div class="font">近期最受期待</div>
        <most-expected :mostExpected="mostExpected"></most-expected>
      </div>
      
		<border></border>
    <coming-movie-item :comingList="mostExpected"></coming-movie-item>
  </div>
</template>

<script>
import {getMostExpectedData} from '../../network/comingSoon'
import MostExpected from '../../components/content/mostExpected/MostExpected'
import Border from "../../components/content/border/Border"
import ComingMovieItem from "../../components/content/comingMovieItem/ComingMovieItem"
export default {
  components: {
    MostExpected,
    Border,
    ComingMovieItem
  },
  data() {
    return {
      mostExpected:[]
    }
  },
 created() {
    getMostExpectedData().then(res => {
          console.log(res.moviecomings)
          this.mostExpected = res.moviecomings
		  // this.nowPlayingList = res.ms
        })
},
}
</script>

<style lang="stylus" scoped>
.coming-soon
	height 100%
	// overflow hidden
	margin-top 100px
	margin-bottom 50px
	.most-expected-wrapper
		padding-left 15px
		padding-top 12px
		padding-bottom 12px

	
</style>