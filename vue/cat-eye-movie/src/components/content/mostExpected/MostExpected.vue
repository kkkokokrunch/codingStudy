<template>
	<div class="most-expected">
		<!-- {{mostExpected[0]}} -->
		<div class="exp-wrapper">
			<ul>
				<li v-for="(item,index) in mostExpected" :key="index">
					<div class="exp-img">
						<img :src="item.image" alt="">
						<div class="heart" @click="like(index)">
							<img src="../../../assets/img/grey-heart.png" 
							class="lil-heart" v-show="index!==num">
							<img src="../../../assets/img/red-heart.png" 
							class="lil-heart" v-show="index==num">
						</div>
						<span class="want">{{item.wantedCount}}人想看</span>
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
				type: Array,
				default: function() {
					return []
				}
			}
		},
		data() {
			return {
				flag: false,
				num:''
				// nowWant:''
			}
		},
		mounted () {
				
		},
		methods: {
			like(index) {
				if(!this.flag) {
					this.mostExpected[index].wantedCount++
					this.flag = !this.flag
					this.num = index
				} else {
					this.mostExpected[index].wantedCount--
					this.flag = !this.flag
				}
			}
		}
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
						
						// color red
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
					.want 
						position absolute
						left 4px
						bottom 5px
						color #faaf00
						font-size 11px
						font-weight 600
				.content 
					.title 
						font-size 13px
						color #222
						margin-bottom 3px
						font-weight 700
					.date 
						font-size 12px
						color #999
				
				
</style>