import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)
// link to flie 
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/Customer',
    name: 'Customer',
    component: () => import('../views/Customer.vue')
  },
  {
    path: '/Product',
    name: 'Product',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/Report',
    name: 'Report',
    component: () => import('../views/Report.vue')
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
