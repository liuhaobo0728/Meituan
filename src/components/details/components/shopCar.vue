<template>
		<div class="shop-car">
			<div class="content">
				<div class="car-left">
					<div class="car-logo">
							<i class="logo-content" :class="{check: shopNumber.count > 0 }"></i>
							<div class="shopNum" v-show="numberShow">
								{{ shopNumber.count }}
							</div>
					</div>
					<p class="car-content" v-show="priceShow">购物车空空如也~</p>
					<div class="content-show">
					<p class="car-price">￥{{ totalPrice }}</p>
					<p class="car-dis">配送费以订单为准</p>
					</div>
				 </div>
				 <div class="car-right" :class="{spreadShow:this.$store.state.starPrice < this.totalPrice}">
				 	{{ priceSpread }}
				 </div>
			</div>
			<div class="car-shop-content">
				<div class="car-shop-header">
					<span class="delete"><i class="iconfont">&#xe609;</i>清空购物车</span>
				</div>
				<div class="car-shop-content">
					<ul>
						<li>
							<div class="content-name">撒大声地</div>
							<div class="content-price">￥12</div>
							<div class="carcontrol-wrapper">
								<car-control :shopNumber="shopNumber"></car-control>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	
</template>

<script>
import CarControl from '@/components/carcontrol/carcontrol'
export default{
	name: 'ShopCar',
	data() {
		return {
			shopNumber:{
					price: 12,
					count: 1
			}
		}
	},
	components:{
		CarControl
	},
	computed:{
		priceShow() {
			if(this.shopNumber.count > 0){
				return false
			}else{
				return false
			}
		},
		numberShow() {
			if(this.shopNumber.count > 0){
				return true
			}else{
				return false
			}
		},
		totalPrice() {
			return this.shopNumber.price * this.shopNumber.count
		},
		priceSpread() {
			if(this.shopNumber.count === 0){
				return `￥${ this.$store.state.starPrice}起送`
			}else if(this.$store.state.starPrice > this.totalPrice){
				return `还差￥${ this.$store.state.starPrice - this.totalPrice }`
			}else{
				return `去结算`
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
	.shop-car
		position: fixed
		left: 0
		bottom: 0
		width: 100%
		height: 48px
		background: rgba(51,51,51,.9)
		.content
			display: flex
			.car-left
				flex: 1
				.car-logo
					display: inline-block
					float: left
					position: relative
					top: -18px
					margin-left: 12px
					margin-right: 10px
					font-size: 0
					.logo-content
						display: block
						width: 50px
						height: 57px
						background: url("//xs01.meituan.net/waimai_i/img/cart.ab827c23.png") no-repeat
						background-size: 50px auto
						background-position: 0px -114px
					.check
						background-position: 0 -57px
					.shopNum
						position: absolute
						top: 2px
						right: 0
						width: 15px
						height: 15px
						line-height: 16px
						border-radius: 15px
						border: 1px solid #fff;
						background: #FB4E44
						color: #fff
						text-align: center
						font-size: 12px
				.car-content
					display: inline-block
					float: left
					line-height: 48px
					font-size: 13px
					color: #888
				.content-show
					.car-price
						font-size: 20px
						color: #fff
						line-height: 35px
					.car-dis
						font-size: 12px
						color: #999
						margin-top: -7px
			.car-right
				flex: 0 0 110px
				width: 110px
				color: #888
				font-size: 16px
				text-align: center
				line-height: 48px
			.spreadShow
				background: #ffd161
				color: #000
				
</style>