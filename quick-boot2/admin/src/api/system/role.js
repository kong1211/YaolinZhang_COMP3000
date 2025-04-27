import request from '@/utils/request'

export function roleList(
  params = { pageNum: 1, pageSize: 999999, search: '' }
) {
  return request({
    url: 'role/list',
    params
  })
}

export function delRole(id) {
  return request({
    url: `role/del/${id}`,
    method: 'delete'
  })
}

export function saveRole(data) {
  return request({
    url: 'role/save',
    method: 'post',
    data
  })
}
