import axios from '@/utils/axios.js'
export const post = (params) => {
  return axios({
    url: '/post',
    params
  })
}
// 文章详情
export const article = (id) => {
  return axios({
    url: `/post/${id}`
  })
}
