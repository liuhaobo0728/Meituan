<template>
	<div class="carcontrol">
		<transition name='fade'>
		<div class="car-dec" v-show="foods.count > 0" @click="handleDecClick"><i class="iconfont">&#xe602;</i></div>
		</transition>
		<div class="car-count" v-show="foods.count > 0">{{ foods.count }}</div>
		<div class="car-add" @click='handleAddClick'><i class="iconfont">&#xe61f;</i></div>
	</div>
</template>

<script>
import Vue from 'vue'
export default{
	name: "CarControl",
	props:{
			foods: Object
	},
	methods:{
		handleAddClick() {
			if(!this.foods.count){
				Vue.set(this.foods,'count',1)
			}else{
				this.foods.count++
			}
		},
		handleDecClick() {
			if(this.foods.count){
				this.foods.count--
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
	.fade-enter-active,.fade-leave-active
		transition: opacity .3s
	.fade-enter,.fade-leave-to
		opacity: 0
	.carcontrol
		font-size: 0
		.car-dec
			display: inline-block
			border-radius: 50%
			padding: 2px
			border: 1px solid #eee
			.iconfont
				color: #eee
		.car-count
			display: inline-block
			font-size: 15px
			padding: 0 10px
		.car-add
			display: inline-block
			background: #ffd161
			border-radius: 50%
			padding: 2px
			
				
</style>