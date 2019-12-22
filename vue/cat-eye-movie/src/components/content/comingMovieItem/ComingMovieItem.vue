<template>
  <div class="coming-movie-item">
    <ul>
      <li v-for="(item,index) in fenzu" :key="index">
         <p class="comingTitle">{{index}}</p>
         <div v-for="coming in item" :key="coming.id">
        <div class="movie-wrapper">
          <div class="movie-item-img">
            <img :src="coming.image" alt="">
          </div>
          <div class="movie-item-content">
            <div class="movie-name">{{coming.title}}</div>
            <div class="movie-pre mt"><span>{{coming.wantedCount}}</span>人想看</div>
            <div class="main-actor mt">主演：{{coming.actor1}},{{coming.actor2}}</div>
            <div class="movie-count mt">{{coming.releaseDate}}</div>
          </div>
        </div>
        <div class="wantsee common">
          想看
        </div>
         </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      comingList: {
        type: Array,
        default: function() {
          return []
        }
      }
    },
    computed: {
      fenzu() {
            // 遍历数组所有的成员，以成员的某个数据作为分组的组名
            // 在添加之前，先判断对象上的属性名是否存在，若不存在则设置一个空数组
            // 将成员添加到对应的属性上（数组）
            let timeTitle = {}
            this.comingList.forEach(item => {
              
                if (!timeTitle[item.releaseDate]) {
                    timeTitle[item.releaseDate] = [];
                }
                timeTitle[item.releaseDate].push(item);
            });
            return timeTitle
            console.log(timeTitle)
        }
    },
    data() {
      return {
        // timeTitle: {}, // 日期分组
      }
    },
    methods: {
        
    },
  }
</script>

<style lang="stylus" scoped>
.coming-movie-item
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
			.wantsee			
				background-color #faaf00
			

</style>