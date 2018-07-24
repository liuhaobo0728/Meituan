<template>
	<ul class="right-list">
		<li 
			class="item" 
			v-for='(item,key) of list' 
			:key='key'
			@click='handleContentClick'
			>{{ key }}</li>
	</ul>
</template>

<script>
export default{
	name: 'RightList',
	props:{
		list: Object
	},
	methods:{
		handleContentClick(e) {
			this.$emit('passLetter',e.target.innerText)
		}
	}
}
</script>

<style lang='stylus' scoped>
	.right-list
		position: absolute
		top: 120px
		right: 0
		bottom: 0
		width: 15px
		line-height: 15px
		text-align: center
		font-size: 11px
		color: #666
		height: 100px
</style>
