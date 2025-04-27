import request from '@/utils/request'

// 用户列表
export function userList(params) {
  return request({
    url: 'user/list',
    method: 'get',
    params
  })
}

// 保存用户
export function saveUser(data) {
  return request({
    url: 'user/save',
    method: 'post',
    data
  })
}

// delete用户
export function delUser(id) {
  return request({
    url: `user/del/${id}`,
    method: 'delete'
  })
}

// 强制用户下线
export function offlineUser(username) {
  return request({
    url: `user/offline/${username}`,
    method: 'post'
  })
}
