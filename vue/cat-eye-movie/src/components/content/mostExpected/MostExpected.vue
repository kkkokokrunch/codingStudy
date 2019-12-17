<template>
  <div class="most-expected">
      <!-- {{mostExpected[0]}} -->
			<div class="exp-wrapper">
				<ul>
          <li v-for="(item,index) in mostExpected" :key="index">
              <div class="exp-img">
                  <img :src="item.image" alt="">
									<div class="heart">
										<img src="../../../assets/img/grey-heart.png" alt="" class="lil-heart">
									</div>
              </div>
							<div class="content">
								<div class="title">
									{{item.title}}
								</div>
								<div class="date">
									{{item.releaseDate}}
								</div>
							</div>
          </li>
      </ul>
			</div>
      
  </div>
</template>

<script>
export default {
    props: {
        mostExpected: {
            type:Array,
            default:function() {
                return []
            }
        }
		},
}
</script>

<style lang="stylus" scoped>
.most-expected
	.exp-wrapper
		ul 
			width 100%
			overflow hidden
			white-space nowrap
			margin-top 12px
			li 
				display inline-block
				margin-right 10px
				.exp-img
					position relative
					img 
						width 85px
						height 115px
					.heart 
						width 28px
						height 28px
						// line-height 28
						background-color rgba(61,63,71,.6)
						text-align center
						border-bottom-right-radius 10px
						position absolute
						top 0
						left 0
						.lil-heart
							width 10px
							height 10px
							position relative
							top 2.5px
							// left 5px
				.content 
					.title 
						font-size 13px
						color #222
						margin-bottom 3px
					.date 
						font-size 12px
						color #999
				
				
</style>