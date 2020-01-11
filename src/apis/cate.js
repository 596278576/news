// 这个文件主要用来处理与categories表相关的数据操作
import myaxios from '@/utils/myaxios.js'

// 1.实现分类数据的新增
export const addCate = (data) => {
  return myaxios({
    method: 'post',
    url: '/addCate',
    data
  })
}
