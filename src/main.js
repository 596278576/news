import Vue from 'vue'

// 引入样式
import '@/styles/animate.css'
import App from './views/Index.vue'

import '@/styles/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
