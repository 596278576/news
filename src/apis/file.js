import axios from '@/utils/axios.js'
export const upload = (data) => {
  return axios({
    method: 'post',
    url: '/upload',
    data
  })
}
