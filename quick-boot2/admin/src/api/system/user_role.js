import request from '@/utils/request'

export function getUserRoles(userId) {
  return request({
    url: `user/role/list/${userId}`,
    method: 'get'
  })
}

export function allotUserRoles({ userId, roleIds }) {
  return request({
    url: `user/role/allot/${userId}`,
    method: 'post',
    data: roleIds
  })
}
