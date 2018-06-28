<template>
	<div class="footer">
		<router-link tag='div' to='/' class="left"><i class="icon-index"></i><span>首页</span></router-link>
		<router-link tag='div' to='/order' class="center"><i class="icon-order"></i><span>订单</span></router-link>
		<router-link tag='div' to='/my' class="right"><i class="icon-my"></i><span>我的</span></router-link>
	</div>	


</template>

<script>
export default{
	name: 'HomeFooter'
}

</script>

<style lang="stylus" scoped>
	.footer
		
		position: fixed
		bottom: 0
		width: 100%
		height: 50px
		text-align: center
		border-top: 1px solid rgb(182, 182, 182)
		background-color: rgba(246,246,246,0.95)
		display: flex
		flex-direction: row
		.left,.center,.right
			flex: 1
			color: #999
			i 
				display: block
				width: 25px
				height: 25px
				margin: 4px auto 
				background: url('./home-img/footer.png') no-repeat
				background-size: 25px auto
			.icon-index
				background-position: 0 -75px
			.icon-order
				background-position: 0 -25px
			.icon-my
				background-position: 0 -125px	
			span
				display: block
				font-size: 12px
		.router-link-active
			color: #333
		.router-link-active .icon-index
			background-position: 0 -50px

		

</style>