import request from '@/utils/request'

export function permissionList(
  params = { pageNum: 1, pageSize: 999999, search: '' }
) {
  return request({
    url: 'permission/list',
    params
  })
}

export function delPermission(id) {
  return request({
    url: `permission/del/${id}`,
    method: 'delete'
  })
}

export function savePermission(data) {
  return request({
    url: 'permission/save',
    method: 'post',
    data
  })
}
