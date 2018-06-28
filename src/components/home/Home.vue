<template>
	<div>
		<home-header-top></home-header-top>
		<home-header></home-header>
		<home-menu :list='menuList'></home-menu>
		<home-shops :list='shopsList'></home-shops>
		<home-footer></home-footer>
	</div>
</template>

<script>
import HomeHeader from './components/header'
import HomeFooter from './components/footer'
import HomeHeaderTop from './components/headerTop'
import HomeMenu from './components/menu'
import HomeShops from './components/shops'
import axios from 'axios'
export default {
	name: 'Home',
	data() {
		return {
			menuList: [],
			shopsList: []

		}
	},
	components: {
		HomeHeader,
		HomeFooter,
		HomeHeaderTop,
		HomeMenu,
		HomeShops
	},
	mounted() {
		this.getHomeInfo()
	},
	methods: {
		getHomeInfo: function() {
			axios.get('/static/home.json')
			.then(this.getHomeInfoSucc)
		},
		getHomeInfoSucc: function(res) {
			res = res.data
			if(res.ret && res.data){
				const data = res.data
				this.menuList = data.menuList
				this.shopsList = data.shopsList
			}
		}
	}
}
</script>

<style lang="stylus" scoped>

</style>