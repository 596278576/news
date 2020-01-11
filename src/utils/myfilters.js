// 通过Vue.filter创建全局过滤器
// import Vue from 'vue'

// export default {} // 返回默认对象
// 创建一个日期格式化过滤器
// export const :只是说明这个对象可以暴露
// export const dateFormat = Vue.filter('dateFormat', (time, spe) => {
//   spe = spe || '-'
//   let year = time.getFullYear()
//   let month = time.getMonth() + 1
//   let day = time.getDate()
//   return `${year}${spe}${month}${spe}${day}`
// })

// 过滤器的本质是一个函数

export const dateFormat = (time, spe) => {
  spe = spe || '/'
  let year = time.getFullYear()
  let month = time.getMonth() + 1
  let day = time.getDate()
  return `${year}${spe}${month}${spe}${day}`
}
