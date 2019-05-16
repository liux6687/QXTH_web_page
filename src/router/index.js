import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
			component: resolve=>(require(["@/view/login"],resolve))
    },
		{
		  path: '/selectShop',
		  name: 'SelectShop',
			component: resolve=>(require(["@/view/selectShop"],resolve))
		},
		{
		  path: '/order',
		  name: 'Order',
			component: resolve=>(require(["@/view/order"],resolve))
		},
		{
		  path: '/wallet',
		  name: 'Wallet',
			component: resolve=>(require(["@/view/wallet"],resolve))
		}
  ]
})
