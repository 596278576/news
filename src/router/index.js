import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/index.vue'
import login from '@/views/login.vue'
import personal from '@/views/Personal.vue'
import register from '@/views/register.vue'
import edit from '@/views/edit_profile.vue'

Vue.use(VueRouter)
let router = new VueRouter({
  routes: [
    {
      name: 'index',
      path: '/',
      component: index
    },
    {
      name: 'edit',
      path: '/edit',
      component: edit
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

router.beforeEach((to, from, next) => {
  // ...
  if (to.path.indexOf('/personal') === 0) {
    let token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next({ name: 'login' })
    }
  } else {
    next()
  }
})
export default router
