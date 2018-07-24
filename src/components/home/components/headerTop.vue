<template>
	<div class="header-top">
			<router-link tag='div' to="/city" class="header-loca">
				<i class="iconfont iconfont-location">&#xe605;</i>
				<span class="location">{{ this.$store.state.city}}</span>
				<i class="iconfont location-right">&#xe606;</i></router-link>
			<router-link to='/search' class="header-search">
				<i class="iconfont">&#xe641;</i>
				<p class="seach-text">鸡排</p>
			</router-link>
	</div>
</template>

<script>
export default{
	name: 'HomeHeaderTop'
}
	
</script>

<style lang="stylus" scoped>
	.header-top
		position:absolute
		left:0
		top: 0
		width: 100%
		z-index: 2
		text-align: center
		.header-loca
			position: relative
			display: inline-block
			min-width: 92px
			max-width: 40%
			height: 28px
			line-height: 28px
			margin: 0 12px 0 10px
			background: rgba(0,0,0,.3)
			border-radius: 13px
			color: #fff
			.iconfont-location
				line-height: 28px
				font-size: 16px
				vertical-align: middle
			.location
				display: inline-block
				vertical-align: middle
				max-width: 40%
				padding: 0 20px 0px 0px
				font-size: 14px
				overflow: hidden
				white-space: nowrap
				text-overflow: ellipsis
			.location-right
				position: absolute
				right: 5px
				white-space: nowrap
				display: inline-block
				overflow: hidden
				text-overflow: ellipsis
				font-size: 14px
				line-height: 28px
		.header-search
			display: inline-block
			width: 45%
			height: 28px
			line-height: 28px
			margin: 10px 10px 0 0 
			background: white
			border-radius: 13px
			font-size: 0
			text-align: left
			.iconfont
				color: #666
				font-size: 16px
				padding: 0 3px 0 7px
			.seach-text
				display: inline-block
				font-size: 14px
				color: #333
</style>