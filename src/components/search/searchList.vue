<template>
	<div class="search-list">
		<div class="footer">
			<router-link tag='div' to='/details/' class="shops border-bottom">
			<div class="shops-left">
				<span class="shops-logo pingpai">新店</span>
				<img class="shops-img" src="http://p1.meituan.net/0.84.63/xianfu/ab516b002a5c62953586b64f1d2a07942645.jpg.webp">
			</div>
			<div class="shops-right">
				<p class="shops-title">天津麦当劳杨柳青新华道餐厅</p>
				<div class="shops-up">
					<star></star>
					<span class="mid-dis">121221</span>
					<span class="mid-line"></span>
					<span class="mid-time">12</span>
				</div> 
				<div class="shops-down">
					<span>起送价￥12</span>
					<span class="down-line">|</span>
					<span>配送￥12</span>
					<div class="shops-from">
						<span>美团专送</span>
					</div>
				</div>
				<div class="shops-menu">
					<div class="menu-content border-top">
					<div class="menu-title">
						羊肉串
					<span class="menu-price">
						￥7
					</span>
					</div>
					</div>
					<div class="menu-show" v-show='ifShow'>
					<div class="menu-content border-top">
					<div class="menu-title">
						羊肉串
					<span class="menu-price">
						￥7
					</span>
					</div>
					</div>
					<div class="menu-content border-top">
					<div class="menu-title">
						羊肉串
					<span class="menu-price">
						￥7
					</span>
					</div>
					</div>
					</div>
				</div>
			</div>
			</router-link>
			<div class="foot-more border-top" @click='handleShowClick'>
				<span class="more-text">查看其它5个商品</span>
				<i class="iconfont">&#xe608;</i>
			</div>
		</div>
	</div>
</template>

<script>
import star from '@/components/star/star'
export default{
	name: 'SearchList',
	data() {
		return {
			ifShow: false
		}
	},
	components:{
		star
	},
	methods:{
		handleShowClick() {
			this.ifShow = !this.ifShow

		}
	}
}
</script>

<style lang="stylus" scoped>
	.search-list
		position: absolute
		width: 100%
		height: 100%
		top: 44px
		background: red
		.footer
			width: 100%
			background: #eee
			.shops
				display: flex
				padding: 12.5px 0 0 10px
				overflow: hidden
				background: #fff
				.shops-left
					position: relative
					flex: 0 0 86px
					width: 86px
					.shops-logo
						display: inline-block
						position: absolute
						top: 0
						left: 0
						padding: 0 2px 0 2px
						height: 14px
						line-height: 14px
						text-align: center
						color: #fff
						font-size: 12px
					.not
						display: none
					.pingpai 
						background-color: #ffa627
					.xindian 
						background-color: #21c56c
					.shops-img
						display: block
						width: 84px
						height: 63px
						border: 1px solid #e4e4e4
						margin: 0 auto
				.shops-right
					flex: 1
					display: flex
					flex-direction: column
					padding: 0 15px 0 10px
					.shops-title
						font-size: 17px
						color: #333
						font-weight: bold
						overflow: hidden
					.shops-up
						flex: 1
						margin-top: 7px
						color: #666
						font-size: 12px
						.mid-number
							margin-left: 10px
						.mid-time
							float: right
						.mid-line
							float: right
							margin: 2px 2px 0 5px
							height: 6px
							font-size: 0px
							border: .5px solid #ccc
						.mid-dis
							float: right
							margin-left: 5px
							
					.shops-down
						flex: 1
						margin-top: 7px
						margin-bottom: 5px
						font-size: 12px
						color: #656565
						.down-line
							color: #dcdcdc
						.shops-from
							float: right
							font-size: 13px
							background-color: #ffd161
							color: #333
							border-radius: 5px
							span
								height: 15px
								line-height: 15px
								padding: 0 3px
								display: inline-block
								position: relative
					.shops-menu
							width: 100%
						.menu-content
							height: 30px
							margin: 0 auto
							padding: 10px 0
							line-height: 30px
							.menu-title
								font-size: 14px
								.menu-price
									float: right
									font-size: 16px
									color: #f9b700
									text-align: right
			.foot-more
				width: 100%
				height: 40px
				margin-bottom: 10px
				line-height: 40px
				text-align: center
				background: #fff
				.more-text
					font-size: 14px
				.iconfont
					font-size: 16px
					color: #9b9b9b
</style>