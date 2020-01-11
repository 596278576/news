import axios from '@/utils/axios.js'
export const category = () => {
  return axios({
    url: '/category'
  })
}
