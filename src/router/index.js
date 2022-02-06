import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Convertidor from '../views/Convertidor.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/convertidor',
    name: 'Convertidor',
    component: Convertidor
  },
]

const router = new VueRouter({
  routes
})

export default router
