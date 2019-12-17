<template>
    <div class="tabbar">
        <ul>
            <router-link tag="li" to="/movie" class="item">
                <i class="iconfont icon-dianying"></i>
                <p>电影</p>
            </router-link>
            <router-link tag="li" to="/cinema" class="item">
                <i class="iconfont icon-yingyuan"></i>
                <p>影院</p>
            </router-link>
            <router-link tag="li" to="/user" class="item">
                <i class="iconfont icon-wode"></i>
                <p>我的</p>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.tabbar
	width 100%
	height 50px
	background-color #fff
	border-top 1px #ebe8e3 solid
	position fixed 
	left 0
	right 0
	bottom 0
	ul
		display flex
		text-align center
		height 50px
		align-items center
		.item
			flex 1
			height 40px
			i 
				font-size 20px
			p 
				font-size 12px
				line-height 18px
		.router-link-active
			color #f03d37
			

// .tabbar{ width:100%; height:50px; background: white; border-top:2px #ebe8e3 solid; position: fixed; left: 0; bottom:0;}
// .tabbar ul{ display: flex; text-align: center; height:50px; align-items:center;}
// .tabbar ul li{ flex:1; height:40px;}
// .tabbar ul li.active{ color: #f03d37;}
// .tabbar ul li.router-link-active{ color: #f03d37;}
// .tabbar ul i{ font-size: 20px;}
// .tabbar ul p{ font-size: 12px; line-height: 18px;} 
</style>
