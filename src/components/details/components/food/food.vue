<template>
	<div>
		<details-notice :list='noticeList'></details-notice>
		<div class="food">
			<div class="food-menu" ref='wrapperMenu'>
				<div>
				<div class="menu-text" v-for='item of list.food'>
					<div class="menu-text-item border-bottom">
						<span class="menu-item">{{ item.name }}</span>
					</div>
				</div>
				</div>
			</div>
			<div class="food-content" ref='wrapperFood'>
				<div>
				<div v-for='item of list.food'>
					<h3 class="content-name" >{{ item.name}}</h3>
					<div class="content-content border-bottom" v-for='(item,index) of item.foods' :key=index>
						<div class="content-img">
							<img :src='item.imgUrl'>
						</div>
						<div class="content-text">
							<h2 class="content-title">
								{{ item.name }}
							</h2>
							<p class="right-text">
								{{ item.content }}
							</p>
							<p class="text-good">
								赞{{ item.goodNum }}
							</p>
							<p class="text-price">
								¥{{ item.price }}
							</p>
						</div>
						<div class="car-wrapper">
							<car-control :foods='item'></car-control>
						</div>
					</div>
				</div>
				</div>
			</div>
		</div>
		<shop-car></shop-car>
	</div>
</template>

<script>
import Bscroll from 'better-scroll'
import DetailsNotice from '@/components/details/components/notice'
import ShopCar from '@/components/details/components/shopCar'
import CarControl from '@/components/carcontrol/carcontrol'
export default{
	name: 'Food',
	props:{
		list: Object
	},
	computed:{
		noticeList() {
			return this.list.notice
		}
		// selectFood () {
		// 	let food = []
		// 	Object.keys(this.list).forEach((key) => {
		// 		let foods = []
		// 		foods.push(this.list[food])
		// 		console.log(foods)
		// 		// foods.food.forEach((foodList) => {
		// 		// 	console.log(foodList)
		// 		//  // 	foodList.food.forEach((foods) => {
		// 		// 	// 	if(foods.count){
		// 		// 	// 	food.push(foods)
		// 		// 	// 	}
		// 		// 	// })
		// 		// })
		// 	})
		// 	return food
		// }
	},
	components: {
		DetailsNotice,
		ShopCar,
		CarControl
	},
	mounted() {
		this.scroll = new Bscroll(this.$refs.wrapperMenu)
		this.scroll = new Bscroll(this.$refs.wrapperFood)
	}
}	
</script>

<style lang="stylus" scoped>
	.food
		position: absolute
		top: 140px
		bottom: 50px
		width: 100%
		overflow: hidden
		display: flex
		.food-menu
			flex: 0 0 85px
			width: 85px
			height: 100%
			background: #efefef
			.menu-text
				position: relative
				width: 85px 
				height: 61px
				font-size: 14px
				text-align: left
				color: #656565
				.menu-text-item
					position: relative
					margin: 0 6px
					height: 60px
					&:before
						border-color: #bfbfbf
					.menu-item
						position: absolute
						left: 0
						top: 25%
						line-height: 17px
						max-height: 34px
						padding-left: 8px
						overflow: hidden
						box-sizing: border-box
						text-overflow: ellopsis

					
		.food-content
			flex: 1
			.content-name
				position: relative
				line-height: 35px
				padding-left: 16px
				font-size: 13px
				color: #333
				&:before
					content: ''
					position: absolute
					top: 12px
					left: 10px
					height: 10px
					width: 2px
					background: #ffd161
			.content-content
				display: flex
				margin-left: 10px
				padding: 15px 0 10px 0
				&：before
					border-color: #f0f0f0
				.content-img
					width: 62px
					height: 62px
					overflow: hidden
					img
						width: 82px
						height: 62px
						margin-left -10px
				.content-text
					flex: 1
					margin: 0 10px
					font-size: 0
					.content-title
						height: 20px
						line-height: 20px
						font-size: 16px
						color: #2f2f2f
					.right-text
						line-height: 15px
						margin-top: 10px
						color: #a9a9a9
						font-size: 12px
						overflow: hidden
						box-sizing: border-box
						text-overflow: ellopsis
					.text-good
						margin-top: 5px
						line-height: 15px
						color: #a9a9a9
						font-size: 12px
					.text-price
						margin-top: 3px
						font-size: 18px
						color: #fe4d2d
				.number
					position: absolute
					bottom: 20px
					right: 20px
					font-size: 10px
					.add
						display: inline-block
						width: 25px
						height: 25px
						line-height: 25px
						background: #ffd161
						border-radius: 50%
				.car-wrapper
					position: absolute
					bottom: 12px
					right: 12px
</style>