<template>
	<div>
	<div 
		class="list-city" 
		ref='warpper' 
		>
		<div>
		<div 
			class="list-city-all" 
			v-for='(item,key) of cityList' 
			:key='key'
			:ref='key'
			>
			<div class="list-title">{{ key }}</div>
			<div 
				class="list-item" 
				v-for='(innerItem,index) of item' 
				:key='innerItem.id'
				@click='handleCityClick(innerItem.name)'
				>
				<div class="item border-bottom">{{ innerItem.name }}</div>
			</div>
		</div>
	<div class="foot">
		<div class="footer"></div>
		<div class="footer-tel">客服电话：<p class="tel-text">12345678</p></div>
	</div>
	</div>
	</div>
	<right-list :list='cityList' @passLetter='handleLetterClick'></right-list>
	</div>
</template>

<script>
import Bscroll from 'better-scroll'
import RightList from './rightList'
export default{
	name: 'ListCity',
	data() {
		return {
			cityList: this.$store.state.list
		}
	},
	components:{
		RightList
	},
	methods:{
		handleLetterClick(l) {
			const element = this.$refs[l][0]
			this.scroll.scrollToElement(element)
			
		},
		handleCityClick(city) {
			this.$store.dispatch('changeCity',city)
			this.$router.push('/')
		}
	},
	mounted() {
		this.scroll = new Bscroll(this.$refs.warpper)
	}
}
</script>

<style lang="stylus" scoped>
	.list-city
		overflow: hidden
		position: absolute
		left: 0
		right: 0
		top: 79px
		bottom: 0 
		width: 100%
		.list-city-all
			margin-right: 15px
			.list-title
				height: 30px
				line-height: 30px
				background: #eee
				font-size: 14px
				padding-left: 10px
			.item
				margin-left: 10px
				height: 44px
				line-height: 44px
				font-size: 16px
				&:before
					border-color: #e4e4e4
				&:after
					border-color: #e4e4e4
		.foot
			background: #eee
			.footer
				height: 60px
			.footer-tel
				margin-top: 27px
				padding-bottom: 10px
				height: 19px
				line-height: 19px
				text-align: center
				color: #999
				.tel-text
					display: inline-block
					font-size: 14px
					color: orange
</style>