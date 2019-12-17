<template>
  <div class="movie-item">
      <ul>
          <li v-for="(item,index) in nowPlayingList" :key="index">
						<div class="movie-wrapper">
							<div class="movie-item-img">
                  <img :src="item.img" alt="">
              </div>
							<div class="movie-item-content">
								<div class="movie-name">{{item.t}}</div>
								<div class="movie-score mt" v-show="item.r !== -1">观众评<span>{{item.r}}</span></div>
								<div class="movie-pre mt" v-show="item.r == -1"><span>6666</span>人想看</div>
									<div class="main-actor mt">主演：{{item.actors.replace(/\//g,',')}}</div>
								<div class="movie-count mt">今天{{item.cC}}家影院放映{{item.NearestShowtimeCount}}场</div>
								
							</div>
							
						</div>
							<div class="movie-ticket common" v-show="item.r !== -1">
								购票
							</div>
							<div class="pre-ticket common" v-show="item.r == -1">
								预售
							</div>
          </li>
      </ul>
      <!-- {{nowPlayingList[0]}} -->
      <!-- <div class="movie-item-img"></div>
      <div class="movie-item-content"></div>
      <div class="movie-item-btn"></div> -->
</div>
</template>

<script>
export default {
    props: {
        nowPlayingList: {
            type:Array,
            default:function() {
                return []
            }
        }
		},
    data() {
        return {
            
        }
		},
    methods: {
        
    },
}

</script>

<style lang="stylus" scoped>
.movie-item
	padding-left 15px
	// margin-bottom 15px
	// box-sizing border-box
	ul
		// padding 15px
		// margin-bottom 15px
		li
			// padding 15px 
			// margin-bottom 15px
			position relative
			padding 10px 0
			border-bottom 1px solid #ececec
			.movie-wrapper
				display flex
				.movie-item-img
					img
						width 64px
						height 90px
				.movie-item-content
					width 212px
					padding-left 10px
					padding-top 5px
					font-size 13px
					color #666
					line-height 15px
					.mt 
						margin-top 6px
					.movie-name
						font-size: 17px;
						color: #333;
						font-weight: 700;
						padding-right: 5px;
					.main-actor 
						text-overflow: ellipsis;
						overflow: hidden;
						white-space: nowrap;
					.movie-score
					.movie-pre 
						span 
							margin-left 3px
							font-weight: 700;
							color: #faaf00;
							font-size: 15px;
					// .movie-pre 
			.common
				position absolute
				top 45px
				right 25px
				width 47px
				height 27px
				line-height 28px
				text-align center
				box-sizing border-box
				color #fff
				border-radius 4px
				white-space nowrap
				font-size 12px
			.movie-ticket				
				background-color #f03d37
			.pre-ticket
				background-color #3c9fe6

</style>