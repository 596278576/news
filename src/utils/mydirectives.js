// import Vue from 'vue'

// 创建一个聚焦指令
// export const setfocus = Vue.directive('setfocus', {
//   inserted(el) {
//     el.focus()
//   }
// })

export const setfocus = {
  inserted(el) {
    el.focus()
  }
}

export const setcolor = {
  inserted(el, binding) {
    el.style.color = binding.value
  }
}
