<template>
	<div>
	<div class="header" v-for="item of list" :key="item.id">
		<div class="header-title" >
			<div class="header-return iconfont" @click='handleReturnClick'>
				&#xe624;
			</div>
			<span class="title">
				{{ item.title }}
			</span>
		</div>
		<div class="header-menu border-topbottom">
			<router-link class="item-tag" tag='div' :to="{name: 'Food',params: {foodList: item.food,noticeList: item.notice }}"><p>点菜</p></router-link>
			<router-link class="item-tag" tag='div' :to="{name:'Merchant'}"><p>评价</p></router-link>
			<router-link class="item-tag" tag='div' :to="{name:'Evaluate'}"><p>商家</p></router-link>
		</div>
	</div>
	</div>
</template>

<script>
export default{
	name: 'DetailsHeader',
	props:{
		list: Array
	},
	methods:{
		handleReturnClick() {
			this.$router.push('/')
		}
	}
}	
</script>

<style lang="stylus" scoped>
	.header-title
		display: flex
		text-align: center
		line-height: 43px
		.header-return
			float: left
			width: 40px
			font-weight: bold
			font-size: 17px
		.title
			flex: 1
			margin-right: 40px
			font-weight: bold
			font-size: 17px
	.header-menu
		display: flex
		line-height: 49px
		font-size: 16px
	.border-topbottom
		&:before
			border-color: #ddd
		.item-tag
			flex: 1
			text-align: center
		.router-link-active p
			width: 50px
			margin: 0 auto
			border-bottom: 4px solid #ffd161

		
</style>