import request from '@/utils/request'

export function getTreeMenus() {
  return request({
    url: 'menu/tree',
    method: 'get'
  })
}

export function menuList(
  params = { pageNum: 1, pageSize: 999999, search: '' }
) {
  return request({
    url: 'menu/list',
    params
  })
}

export function delMenu(id) {
  return request({
    url: `menu/del/${id}`,
    method: 'delete'
  })
}

export function saveMenu(data) {
  return request({
    url: 'menu/save',
    method: 'post',
    data
  })
}

export function getRoleMenus(roleId) {
  return request({
    url: 'role/menu/list/' + roleId,
    method: 'get'
  })
}

export function allotRoleMenus({
  roleId,
  menuIds
}) {
  return request({
    url: `role/menu/allot/${roleId}`,
    method: 'post',
    data: menuIds
  })
}
