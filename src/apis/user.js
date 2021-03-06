import axios from '@/utils/axios.js'
export const login = (data) => {
  return axios({
    method: 'post',
    url: '/login',
    data
  })
}
export const register = (data) => {
  return axios({
    method: 'post',
    url: '/register',
    data
  })
}
// 用户详情
export const user = (id) => {
  return axios({
    url: `/user/${id}`
  })
}
// 编辑信息
export const userupdate = (id, data) => {
  return axios({
    method: 'post',
    url: `/user_update/${id}`,
    data
  })
}
