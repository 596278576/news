import Vue from 'vue'
import router from '@/router/index.js'
// 引入样式
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
