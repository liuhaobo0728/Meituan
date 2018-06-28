<template>
	<div>
	<details-header :list='detailsList'></details-header>
	<router-view></router-view>
	</div>
	
</template>

<script>
import DetailsHeader from './components/header' 
import axios from 'axios'
export default{
	name: 'Details',
	data() { 
		return {
			detailsList: []
		}
	},
	components:{
		DetailsHeader,
	},
	mounted() { 
		this.getDetailsInfo()
	},
	methods:{
		getDetailsInfo() {
			axios.get('/static/details' +this.$route.params.id + '.json')
			.then(this.getDetailsInfoSucc)
		},
		getDetailsInfoSucc(res) {
			res = res.data
			if(res.ret && res.data){
				const data = res.data
				this.detailsList = data.foodList
			}
		}
	}
}	
</script>

<style lang="stylus" scoped>
	
</style>