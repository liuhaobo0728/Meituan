<template>
	<div class="header-top">
			<div class="header-loca">天津市</div>
			<div class="header-search">搜索框</div>
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
		right:0
		top:.1rem
		width: 100%
		.header-loca
			float:left
			width:.9rem
			height:.3rem
			line-height: .3rem
			background: rgba(0,0,0,.3)
			border-radius: .5rem
			font-size: 14px
			color: white
			text-align: center
		.header-search
			float:right
			width: 1.7rem
			height: .3rem
			line-height: .3rem
			background: white
			border-radius:.25rem
			font-size: 12px
			color:#ccc
</style>