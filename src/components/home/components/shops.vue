<template>
	<div>
	<div class="shops-top"></div>
	<div class="title-bar">
        <span>附近商家</span>
    </div>
	<router-link tag='div' :to="'/details/' + item.id" class="shops border-bottom" v-for="(item,index) of list" :key="item.id" @click.native='handleStarPrice(item.startPrice)'>
		<div class="shops-left">
			<span class="shops-logo" :class="{pingpai:item.type===0,xindian:item.type===1,not:item.type===2}">{{ item.type ? '新店' : '品牌' }}</span>
			<img class="shops-img" :src="item.logoImg">
		</div>
		<div class="shops-right">
			<p class="shops-title">{{ item.title }}</p>
			<div class="shops-up">
				<star :score='item.grade'></star>
				<span class="mid-number">月售{{ item.monthNum }}</span>
				<span class="mid-dis">{{ distance(index) }}</span>
				<span class="mid-line"></span>
				<span class="mid-time">{{ time(index) }}</span>
				
			</div> 
			<div class="shops-down">
				<span>起送价￥{{ item.startPrice }}</span>
				<span class="down-line">|</span>
				<span>配送￥{{ item.distribution }}</span>
				<div class="shops-from" v-if='item.courier'>
					<span>美团专送</span>
				</div>
			</div>
			<ul class="active">
				<li v-if='item.shop_return_price.code'><img src="http://p0.meituan.net/xianfu/652eea4034250563fe11b02e3219ba8d981.png.webp"><span>实际支付{{ item.shop_return_price.min_price }}元返{{ item.shop_return_price.dis_money}}元商家代金券</span></li>
				<li v-if='item.shop_return_chit.code'><img src="http://p0.meituan.net/xianfu/c2c0f31d0ebf0f60af115d058169c492992.png.webp"><span>有机会领取商家代金券</span></li>
				<li v-if='item.shop_return_invoice.code'><img src="http://p0.meituan.net/xianfu/476ba65ee80b6385bab292c085baed17940.png.webp"><span>本店支持开发票，开票金额{{ item.shop_return_invoice.min_price }}元</span></li>
			</ul>

		</div> 
	</router-link>
	<div class="shops-bottom"></div>
	</div>

</template>

<script>
import star from '@/components/star/star'
export default{
	name: 'HomeShops',
	components: {
		star
	},
	props: {
		list: Array
	},
	methods: {
		distance(index){
			const dis = this.list[index].distance
			if(dis > 1000){
				return (dis/1000).toFixed(1) + 'km'
			}else{
				return dis + "m"
			}
		},
		time(index){
			const time = this.list[index].time
			if(time > 60){
				return (time/60).toFixed(1) + "h"
			}else{
				return time + "min"
			}
		},
		handleStarPrice(startPrice) {
			this.$store.dispatch('changeStarPrice',startPrice)
		}
	}
}	
</script>

<style lang="stylus" scoped>
	.shops-top
		height: 11px
		background-color: #ebebeb
	.title-bar
		height: 40px
		line-height: 40px
		text-align: center
		span
			display: inline-block
			position: relative
			font-weight: bold
			color: #333
			font-size: 20px
			&:before,&:after
				content: ''
				position: absolute
				top: 20px
				width: 40px
				border-top: 1px solid #333
				transform: scaleY(0.5) 
			&:before
				left: -55px
			&:after
				right: -53px
		    	
	.shops
		display: flex
		flex-direction: row
		margin-bottom: 5px
		padding:12.5px 0 12.5px 10px
		overflow: hidden
		.shops-left
			position: relative
			flex: 0 0 86px
			width: 86px
			.shops-logo
				display: inline-block
				position: absolute
				top: 0
				left: 0
				padding: 0 2px 0 2px
				height: 14px
				line-height: 14px
				text-align: center
				color: #fff
				font-size: 12px
			.not
				display: none
			.pingpai 
				background-color: #ffa627
			.xindian 
				background-color: #21c56c
			.shops-img
				display: block
				width: 84px
				height: 63px
				border: 1px solid #e4e4e4
				margin: 0 auto
		.shops-right
			flex: 1
			display: flex
			flex-direction: column
			padding: 0 15px 0 10px
			.shops-title
				font-size: 17px
				color: #333
				overflow: hidden
			.shops-up
				flex: 1
				margin-top: 7px
				color: #666
				font-size: 12px
				.mid-number
					margin-left: 10px
				.mid-time
					float: right
				.mid-line
					float: right
					margin: 2px 2px 0 5px
					height: 6px
					font-size: 0px
					border: .5px solid #ccc
				.mid-dis
					float: right
					margin-left: 5px
					
			.shops-down
				flex: 1
				margin-top: 7px
				font-size: 12px
				color: #656565
				.down-line
					color: #dcdcdc
				.shops-from
					float: right
					font-size: 13px
					background-color: #ffd161
					color: #333
					span
						height: 15px
						line-height: 15px
						padding: 0 6px
						display: inline-block
						position: relative
						&:before,&:after
							content: ''
							position: absolute
							border: 3px solid #fff
							width: 0
							height: 0
							font-size: 0
						&:before
							left: 0
							top: 0
							border-color: #fff #ffd161 #ffd161 #fff 
						&:after
							right: 0
							bottom: 0
							border-color: #ffd161 #fff #fff #ffd161
			.active
				flex: 1
				margin-top: 7px
				color: #898989
				font-size: 12px
				text-align: left
				li
					height: 17px
					margin-bottom: 4px
					img
						width: 14px
						height: 14px
						vertical-align: middle
					span
						vertical-align: middle
						margin-left: 6px
	.shops-bottom
		height: 50px
</style>