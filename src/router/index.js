import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/index.vue'
import login from '@/views/login.vue'
Vue.use(VueRouter)
let router = new VueRouter({
  routes: [
    {
      name: 'index',
      path: '/',
      component: index
    },
    {
      name: 'login',
      path: '/login',
      component: login
    }
  ]
})
export default router
