import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let defaultCity = '天津'
try{
	if(localStorage.city){
		defaultCity = localStorage.city
	}
}catch(e){}
export default new Vuex.Store({
	state: {
		city: defaultCity,
		list: {},
		starPrice: String
	},
	actions:{
		changeCity(ctx,city) {
			ctx.commit('changeCity',city)

		},
		changeList(ctx,list) {
			ctx.commit("changeList",list)
		},
		changeStarPrice(ctx,startPrice) {
			ctx.commit("changeStarPrice",startPrice)
		}
	},
	mutations: {
		changeCity(state,city){
			state.city = city
			try{
				localStorage.city = city
			}catch(e){}
			
		},
		changeList(state,list) {
			state.list = list
		},
		changeStarPrice(state,startPrice) {
			state.starPrice = startPrice
		}
	}
})