import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Order from '@/components/order/Order'
import My from '@/components/my/My'
import Details from '@/components/Details/Details'
import City from '@/components/city/city'
import Search from '@/components/search/search'
import CityContent from '@/components/cityContent/cityContent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/order',
    	name: 'Order',
    	component: Order
    },
    {
    	path: '/my',
    	name: 'My',
    	component: My
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: Details
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/citycontent',
      name: 'CityContent',
      component: CityContent
    }

    ]
})
