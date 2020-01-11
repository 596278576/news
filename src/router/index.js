// 这个就是当前项目中的路由模块，以后与路由配置相关的代码全部在这个文件中搞定
// 1.引入Vue
import Vue from 'vue'
// 2.引入VueRouter--构造函数
import VueRouter from 'vue-router'

// 引入路由所需要映射的组件
import Index from '@/views/Index.vue'
import Product from '@/views/Product.vue'
import Cellphone from '@/views/cellphone.vue'
import Computer from '@/views/computer.vue'
import Cloth from '@/views/cloth.vue'
// 3.挂载：明确的告诉vue，使用vue-router来进行路由的管理
// 如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能
Vue.use(VueRouter)

// 4.创建路由对象
let router = new VueRouter({
  // 5.配置路由：告诉我你的路由到底映射那一个组件，通过routes可以配置多个路由,它是一个数组，里面包含着一个一个的对象，每一个对象就是一个单独的路由配置
  routes: [
    // 6.配置具体的路由，一般情况下，常见的配置属性有：
    // name：路由名称
    // path:路由路径，如/login
    // component:路由所映射的组件对象
    {
      name: 'default',
      path: '/',
      // component: Index
      // 添加重定向
      redirect: { name: 'Index' }
    },
    {
      name: 'Index',
      path: '/index',
      component: Index
    },
    {
      name: 'Product',
      path: '/product/:id',
      component: Product,
      children: [
        {
          name: 'Cellphone',
          path: 'cellphone',
          component: Cellphone
        },
        {
          name: 'Computer',
          path: 'computer',
          component: Computer
        },
        {
          name: 'Cloth',
          path: 'cloth',
          component: Cloth
        }
      ]
    }
  ]
})

// 暴露
export default router
