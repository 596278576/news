import axios from '@/utils/axios.js'
export const post = (params) => {
  return axios({
    url: '/post',
    params
  })
}
