import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
   /*{
    path: '/home/:id',
    name: 'Home',
    component: ()=> import('../views/Home.vue')
  },*/
  {
    path: '/agrupa-mes/:id',
    name: 'AgrupaMes',
    component: () => import('../views/AgrupaMes.vue')
  },
  
  
  {
    path: '/detalle/:id',
    name: 'Detalle',
    component: () => import('../views/Detalle.vue')
  },
  {
    path: '/agrupados/',
    name: 'agrupados',
    component: () => import('../views/agrupados.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
