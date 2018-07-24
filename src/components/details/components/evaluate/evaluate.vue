<template>
	<div class="evaluate">
		<div class="evaluate-content">
			<div class="evaluate-header">
				<div class="header-left  border-right">
					<div class="left-left">
					<h1 class="left-score">3.7</h1>
					<div class="left-eva">商家评价</div>
					</div>
					<div class="left-right">
						<div class="left-right-one">
							<span class="one-name">口味</span>
							<star class="star" :score='score'></star>
							<span class="one-score">4.7</span>
						</div>
						<div class="left-right-one">
							<span class="one-name">包装</span>
							<star class="star" :score='score'></star>
							<span class="one-score">4.7</span>
						</div>
					</div>
				</div>
				<div class="header-right">
					<h1 class="right-score">5.0</h1>
					<div class="right-eva">配送评分</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import star from '@/components/star/star'
export default{
	name: 'Evaluate',
	data() {
		return {
			score: 3.5
		}
	},
	components:{
		star
	}
}	
</script>

<style lang="stylus" scoped>
	.evaluate
		position: absolute
		left: 0
		bottom: 0
		top: 96px
		right: 0
		overflow: hidden
		width: 100%
		background: #eee
		.evaluate-content
			.evaluate-header
				display: flex
				margin-top: 10px
				background: #fff
				padding: 15px 0 10px 0
				text-align: center
				.header-left
					flex: 1
					line-height: 30px
					.left-left
						display: inline-block
						margin-right: 30px
						.left-score
							font-size: 32px
							color: #ffb000
						.left-eva
							font-size: 12px
							color: #656565
					.left-right
						display: inline-block
						vertical-align: top
						.left-right-one
							line-height: 25px
							.one-name
								padding-right: 10px
							.star
								display: inline-block
							.one-score
								font-size: 15px
								color: #ffb000
				.header-right
					flex: 0 0 106px
					text-align: center
					line-height: 30px
					.right-score
						font-size: 24px
						color: #999
					.right-eva
						font-size: 12px
						color: #656565
</style>