<template>
	<div class="menu">
		<div class="menu-icon" v-for="item of list" :key='item.id'>
			<div class="menu-img-conent">
			<img class="menu-img" :src="item.imgUrl">
			</div>
			<p class="menu-text">{{ item.text }}</p>
		</div>
	</div>
</template>

<script>
export default{
	name: 'HomeMenu',
	props: {
		list: Array
	}


}
</script>

<style lang="stylus" scoped>
	.menu
		height: 0
		padding-top:5px
		padding-bottom: 50%
		margin-bottom: 20px
		.menu-icon
			position: relative
			float: left
			width: 25%
			height: 0
			padding-bottom: 25%
		.menu-img-conent
			position: absolute
			top: 0
			left: 0
			right: 0
			bottom: 25px
			box-sizing: border-box
			padding: 10px
			.menu-img
				display: block
				margin: 0 auto
				height:100%
		.menu-text
			position: absolute
			left: 0
			right: 0
			bottom: 0
			height: 25px
			line-height: 25px
			text-align: center
			font-size: 14px
			color: #2f2f2f
</style>