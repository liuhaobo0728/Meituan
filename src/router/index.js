import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Order from '@/components/order/Order'
import My from '@/components/my/My'
import Details from '@/components/Details/Details'
import DetailsFood from '@/components/Details/components/food/food'
import DetailsMerchant from '@/components/Details/components/merchant/merchant'
import DetailsEvaluate from '@/components/Details/components/evaluate/evaluate'
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
      component: Details,
      redirect: { name: 'Food' },
      children: [
    {
      path: '/details/:id/food',
      name: 'Food',
      component: DetailsFood
    },
    {
      path: '/details/:id/merchant',
      name: 'Merchant',
      component: DetailsMerchant
    },
    {
      path: '/details/:id/evaluate',
      name: 'Evaluate',
      component: DetailsEvaluate
    }]
  }]
})
