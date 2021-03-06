import Vue from 'vue'
import router from '@/router/index.js'
// 引入样式
import App from './App.vue'
import { Field, Button, Toast, Icon, Uploader, Image, Dialog, Picker, Tab, Tabs, PullRefresh, List } from 'vant';
Vue.use(Field)
  .use(Button)
  .use(Toast)
  .use(Icon)
  .use(Uploader)
  .use(Image)
  .use(Dialog)
  .use(Picker)
  .use(Tab).use(Tabs)
  .use(PullRefresh)
  .use(List)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
