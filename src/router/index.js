import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'init',
		redirect: { name: 'Home' }
	},
	{
		path: '/home',
		name: 'Home',
		component: () => import('@/views/Home/Home.vue')
	},
	{
		path: '/usuarios',
		name: 'Users',
		component: () => import('@/views/Users/Users.vue')
	},
	{
		path: '/grupos',
		name: 'Groups',
		component: () => import('@/views/Groups/Groups.vue')
	},
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
