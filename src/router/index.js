import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/index.vue'
import login from '@/views/login.vue'
import personal from '@/views/Personal.vue'
import register from '@/views/register.vue'
Vue.use(VueRouter)
let router = new VueRouter({
  routes: [
    {
      name: 'index',
      path: '/',
      component: index
    },
    {
      name: 'register',
      path: '/register',
      component: register
    },
    {
      name: 'personal',
      path: '/personal',
      component: personal
    },
    {
      name: 'login',
      path: '/login',
      component: login
    }
  ]
})
export default router
