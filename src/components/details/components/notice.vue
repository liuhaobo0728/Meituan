<template>
	<div>
	<div class="notice" @click='handleShowClick'>
	<p class="notice-text">{{ notice }}</p>
	<div class="iconfont">&#xe606;</div>
	</div>
	<div class="notice-content" v-show="noticeContentShow">
		<div class="content-text clear-fix">
			<div class="content-main border-top">
					<h3>商家公告</h3>
					<p>{{ notice }}</p>
			</div>
		</div>
		<div class="content-close" @click='handleCloseClick'>
			<div class="iconfont">&#xe625;</div>
		</div>
	</div>
	</div>
</template>

<script>
export default{
	name: 'DetailsNotice',
	data(){
		return {
			noticeContentShow: false
		}
	},
	props:{
		list: String
	},
	computed:{
		notice() {
		 return  this.list
		}
	},
	methods:{
		handleShowClick() {
			this.noticeContentShow = true
		},
		handleCloseClick() {
			this.noticeContentShow = false

		}
	}
}
</script>

<style  lang="stylus" scoped>
	.notice
		display: flex
		line-height: 44px
		text-align: center
		margin-left: 12px
		.notice-text
			color: #656565
			font-size: 12px
			overflow: hidden
			white-space: nowrap
			text-overflow: ellipsis
		.iconfont
			margin-right: 10px
			color: #b0b0b0
	.notice-content
		position: fixed
		top: 0
		left: 0
		z-index: 99
		width: 100%
		height: 100%
		overflow: auto
		background: rgba(0,0,0,.8)
		.content-text
			position: absolute
			left: 0
			right: 0
			bottom: 36%
			margin: 0 auto
			width: 305px
			border-radius: 2px
			background: white
			.content-main
				margin: 20px
				&:before
					border-color: #e4e4e4
				h3
					line-height: 40px
					font-size: 14px
					text-align: center
					color: #656565
				p
					font-size: 14px
					line-height: 17px
					color: #666
		.content-close
			position: absolute
			bottom: 16%
			width: 100%
			height: 100px
			text-align: center
			line-height:100px
			.iconfont
				position: relative
				left: 0 
				right: 0 
				margin: 0 auto
				width: 40px
				height: 40px
				background: rgba(255,255,255,.1)
				line-height: 40px
				border: 1px solid rgba(255,255,255,.3)
				border-radius: 50px
				text-align: center
				color: white

					
					
			

	
</style>