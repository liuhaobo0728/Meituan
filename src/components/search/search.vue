<template>
	<div class="search">
		<div class="search-top">
			<div class="top-left" @click='handleReturnClick'>
			<i class="iconfont">&#xe624;</i>
			</div>
			<form class="top-center">
				<i class="iconfont glass">&#xe641;</i>
				<div class="center-input">
				<input v-model='keyword' class="input-text" type="text" placeholder="请输入商家或商品名称">
				</div>
				<i class="iconfont close" v-if='closeIf' @click='handldValueClick'>&#xe66b;</i>
			</form>
			<div class="top-right">
				<button>搜索</button>
			</div>

		</div>
		<div class="search-hot border-bottom">
			<h2>热门搜索</h2>
		</div>
		<div class="search-hot-text">
			<div class="search-btn">
				<div class="btn">麦当劳</div>
			</div>
		</div>
		<div class="search-his border-bottom">
			<h2>历史搜索</h2>
			<i class="iconfont">&#xe609;</i>
		</div>
		<div class="search-his-text">
		<div class="search-btn">
				<div class="btn">麦当劳</div>
			</div>
		</div>
		<search-list v-show='listShop'></search-list>
	</div>
</template>

<script>
import SearchList from './searchList.vue'
export default{
	name: 'Search',
	data() {
		return { 
			keyword:'',
			listShop:true

		}
	},
	components:{
		SearchList
	},
	computed:{
		closeIf() {
			if(this.keyword == ''){
				return false
			}else{
				return true
			}
		}
	},
	methods:{
		handleReturnClick() {
			this.$router.push('/')
			console.log(mock.data)
		},
		handldValueClick() {
			this.keyword = ""
		}

	}
}
</script>

<style lang="stylus" scoped>
	.search
		position: relative
		width: 100%
		height: 100%
		background: #eee
		.search-top
			display: flex
			line-height: 44px
			background: #fff
			.top-left
				float: left
				width: 37px
				height: 44px
				text-align: center
				.iconfont
					color: #333
					font-size: 20px
					font-weight: bold
			.top-center
				position: relative
				flex: 1	
				display: block
				.glass
					position: absolute
					top: 2px
					left: 5px
					color: red
					line-height: 44px
				.close
						position: absolute
						right: 0
						top: 50%
						margin-top: -15px
						width: 30px
						height: 30px
						line-height: 25px
						border-radius: 50%
						font-size: 12px
						text-align: center
				.center-input
					width: 100%
					height:50px
					.input-text
						box-sizing: border-box
						width: 100%
						height: 32px
						padding: 6px 0 6px 25px
						background: #eee
					input::-webkit-input-placeholder
									color: red
					input:-moz-placeholder
									color: red
					input::-moz-placeholder
									color: red
					input:-ms-input-placeholder
									color: red

					
			
			.top-right
				float: right
				right: 0 
				width: 70px
				height: 44px
				line-height: 44px
				text-align: center
				button
					width: 50px
					height: 30px
					margin: 0 auto 
					border-radius: 2px
					font-size: 14px
					font-weight: 600
					color: #333
					background: #ffd161
		.search-hot
			height: 36px
			padding-left: 15px
			background: #fff
			&:before
				border-color: #e4e4e4
			&:after
				border-color: #e4e4e4
			h2	
				line-height: 36px
				font-size: 14px
				color: #656565
		.search-hot-text
			background: #fff
			margin-bottom: 15px 
			.search-btn
				overflow: hidden
				position: relative
				max-height: 50%
				padding: 5px 15px
				.btn
					float: left
					max-width: 30%
					height: 25px
					line-height: 25px
					padding: 3px 10px
					margin: 10px 0 10px 10px
					font-size: 14px
					text-align: center
					border: 1px solid #ccc
					border-radius: 2px
		.search-his
			position: relative
			height: 36px
			padding-left: 15px
			background: #fff
			&:before
				border-color: #e4e4e4
			&:after
				border-color: #e4e4e4
			h2	
				line-height: 36px
				font-size: 14px
				color: #656565
			.iconfont
				position: absolute
				right: 20px
				top: 50%
				transform: translate(0, -50%) 
				font-size: 18px
				color: #656565
		.search-his-text
			background: #fff
			margin-bottom: 15px 
			.search-btn
				overflow: hidden
				position: relative
				max-height: 50%
				padding: 5px 15px
				.btn
					float: left
					max-width: 30%
					height: 25px
					line-height: 25px
					padding: 3px 10px
					margin: 10px 0 10px 10px
					font-size: 14px
					text-align: center
					border: 1px solid #ccc
					border-radius: 2px

</style>