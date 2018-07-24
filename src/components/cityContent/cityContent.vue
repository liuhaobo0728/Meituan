<template>
	<div class="city-content">
			<div class="content-top-content border-bottom">
			<img class="top-img" src="//xs01.meituan.net/waimai_i/img/logo.42591fec.png" @click='handleReturnClick'>
			选择城市
			</div>
			<div class="content-top-up">
				猜您当前位于：<p class="content-loca">{{ this.$store.state.city}}</p>
			</div>
			<list-city></list-city>
		</div>
</template>

<script>
import ListCity from './Listcity'
export default{
	name: 'City-Content',
	methods:{
		handleReturnClick() {
			this.$router.push('/')
		}
	},
	components:{
		ListCity
	}
}
</script>

<style lang="stylus" scoped>
	.content-top-content
		position: relative
		width: 100%
		height: 42px
		line-height: 42px
		text-align: center
		font-size: 17px
		color: #333
		font-weight: bold
		&:before
			border-color: #e4e4e4
		.top-img
			position: absolute
			left: 15px
			top: 4px
			width: 34px
			height: 34px
	.content-top-up
		height: 37px
		line-height: 37px
		padding-left: 15px
		text-align: left
		font-size: 14px
		.content-loca
			color: orange
			display: inline-block
	
</style>