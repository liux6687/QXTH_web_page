import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
			component: resolve=>(require(["@/view/login"],resolve))
    },
		{
		  path: '/home',
		  name: 'Home',
			component: resolve=>(require(["@/view/home"],resolve)),
			redirect: "/selectShop",
			children: [
				{
				  path: '/selectShop',
				  name: 'SelectShop',
					component: resolve=>(require(["@/components/selectShop"],resolve))
				},
				{
				  path: '/order',
				  name: 'Order',
					component: resolve=>(require(["@/components/order"],resolve))
				},
				{
				  path: '/wallet',
				  name: 'Wallet',
					component: resolve=>(require(["@/components/wallet"],resolve))
				}
			]
		},
		
  ]
})
