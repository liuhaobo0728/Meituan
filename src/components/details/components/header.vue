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
			<div :class="['item-tag',{active: currentTag === tagComponent[index] }]" v-for="(item,index) of tags.name" @click='handleTagClick(index)'><p>{{ item }}</p></div>
		</div>
		<component :is="currentTag" :list='item'></component>
	</div>
	</div>
</template>

<script>
import Food from './food/food'
import Evaluate from './evaluate/evaluate'
import Merchant from './merchant/merchant'
export default{
	name: 'DetailsHeader',
	data() {
		return {
		currentTag: "Food",
		tagComponent: ['Food','Evaluate','Merchant'],
		tags:{
			name:["点菜","评价","商家"]
			}	
		}

	},
	components:{
		Food,
		Evaluate,
		Merchant

	},
	props:{
		list: Array
	},
	methods:{
		handleReturnClick() {
			this.$router.push('/')
		},
		handleTagClick(index) {
			this.currentTag = this.tagComponent[index]
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
		.active p
			width: 50px
			margin: 0 auto
			border-bottom: 4px solid #ffd161

		
</style>