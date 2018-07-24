<template>
	<div class="city">
	<div class="city-top border-bottom">
		<i class="iconfont" @click='handleReturnClick'>&#xe624;</i>
		<h1 class="city-title">选择收货地址</h1>
		<span class="add-loca">新增地址</span>
	</div>
	<div class="city-search border-bottom">
		<div class="city-search-content">
			<router-link to='/citycontent' tag="div" class="content-left">
				<span class="city-loca">{{ this.$store.state.city }}</span>
				<i class="iconfont border-right">&#xe608;</i>
			</router-link>
			<div class="content-right">
				<input v-model='value'  type="text" placeholder="请输入收货地址" >
				<span class="iconfont" v-if='closeIf' @click='handldValueClick'>&#xe66b;</span>
			</div>
		</div>
	</div>
	<div class="search-result" v-show='value' ref='wrapper'>
		<div>
		<div class="result-list border-bottom" v-for='item of list' @click='handleCityClick(item.name)'>
				<p class="list-loca">{{ item.name}}</p>
				<p class="list-eng">{{ item.spell }}</p>
			</div>
		</div>
	</div>
	<div class="location">
		<i class="iconfont">&#xe603;</i>
		<span class="loca-text">点击定位当前位置</span>
	</div>
	</div>
</template>

<script>
import Bscroll from 'better-scroll'
import axios from 'axios'
export default{
	name: 'City',
	data() {
		return {
		value: '',
		list: [],
		timer: null,
		cityList: {}
		}
	},
	computed:{
		closeIf() {
			if(this.value == ''){
				return false
			}else{
				return true
			}
		}

	},
	methods:{
		handldValueClick() {
			this.value = ""
		},
		handleReturnClick() {
			this.$router.push('/')
		},
		getCityInfo() {
			axios.get('/static/city.json')
			.then(this.getCityInfoSucc)
		},
		getCityInfoSucc(res) {
			res = res.data
			if(res.ret && res.data){
				const data = res.data
				this.cityList = data.cities
				this.$store.dispatch('changeList',this.cityList)
			}
		},
		handleCityClick(city) {
			this.$store.dispatch('changeCity',city)
			this.$router.push('/')
		}
	},
	watch:{
		value() {
			if(this.timer){
				clearTimeout(this.timer)
			}
			if(!this.value){
				this.list = []
				return
			}
			this.timer = setTimeout(() => {
				const result = []
				for(let i in this.cityList){
					this.cityList[i].forEach((Value) => {
						if(Value.spell.indexOf(this.value) > -1 ||
							Value.name.indexOf(this.value) > -1){
							result.push(Value)
							}
					})
				}
					this.list = result
			},100)	
		}
	},
	mounted() {
		this.getCityInfo()
		this.scroll = new Bscroll(this.$refs.wrapper)
	}
}
</script>

<style lang="stylus" scoped>
	.city
		position: absolute
		width: 100%
		height: 100%
		background: #eee
		.city-top
			position: relative
			width: 100%
			top: 0
			height: 43px
			background: #fff
			&:before
				border-color: #e4e4e4
			.iconfont
				position: absolute
				top: 0
				left: 0
				height: 42px
				line-height: 42px
				padding: 0 30px 0 15px
			.city-title
				overflow: hidden
				white-space: nowrap
				text-overflow: ellipsis
				text-align: center
				line-height: 42px
				font-size: 17px
				font-weight: bold
				color: #333
			.add-loca
				position: absolute
				right: 10px
				top: 0
				height: 42px
				line-height: 42px
				font-size: 14px
				color: #666
		.city-search
			margin-bottom: 10px
			padding: 9px 8px
			line-height: 46px
			background: #fff
			&:before
				border-color: #e0e0e0
			.city-search-content
				display: flex
				height: 28px
				line-height: 28px
				border-radius: 5px
				background: #efefef
				.content-left
					margin-left: 20px
					.city-loca
						display: inline-block
						max-width: 30px
						font-size: 14px
						overflow: hidden
						white-space: nowrap
						text-overflow: ellipsis
					.iconfont
						vertical-align: 9px
						padding-left: 2px
						color: rgba(0,0,0,.5)
						font-size: 8px
						padding-right: 10px
						&:before
							border-color: grey
				.content-right
					flex: 1
					margin-left: 10px
					margin-right: 25px
					input
						width: 100%
						border: 0
						box-sizing: border-box
						font-size: 13px
						background: #efefef
					input::-webkit-input-placeholder
							color: red
					input:-moz-placeholder
							color: red
					input::-moz-placeholder
							color: red
					input:-ms-input-placeholder
							color: red
					.iconfont
						position: absolute
						right: 15px
						top: 50%
						margin-top: -7.5px
						width: 15px
						height: 15px
						line-height: 15px
						border-radius: 50%
						font-size: 8px
						text-align: center
		.search-result
			z-index: 1
			overflow: hidden
			position: absolute
			top: 89px
			left: 0
			right: 0
			bottom: 0
			width: 100%
			background: #fff
			.result-list
				height: 60px
				line-height: 20px
				margin-left: 10px
				font-size: 14px
				&:before
					border-color: #e4e4e4
				&:after
					border-color: #e4e4e4
				.list-loca
					margin-top: 12px
					padding-right: 10px
					line-height: 20px
					color: #333
				.list-eng
					line-height: 20px
					padding-top: 6px
					padding-bottom: 12px
					color: #999
					overflow: hidden
					text-overflow: ellipsis
					white-space: nowrap
					width: 90%
		.location
			height: 45px
			line-height: 45px
			background: #fff
			text-align: center
			font-size: 16px
			.iconfont
				color: orange
</style>