import request from '@/utils/request'

export function getRolePermissions(roleId) {
  return request({
    url: `/role/permission/list/${roleId}`
  })
}

export function allotRolePermissions({ roleId, permissionIds }) {
  return request({
    url: `/role/permission/allot/${roleId}`,
    method: 'post',
    data: permissionIds
  })
}
