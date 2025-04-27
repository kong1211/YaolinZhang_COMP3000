import request from '@/utils/request'

export function empList(
  params = { pageNum: 1, pageSize: 999999, search: '' }
) { 
  return request({
    url: 'hall/emp/list',
    params
  })
}

export function delEmp(id) {
  return request({
    url: `hall/emp/del/${id}`,
    method: 'delete'
  })
}

export function saveEmp(data) {
  return request({
    url: 'hall/emp/save',
    method: 'post',
    data
  })
}
