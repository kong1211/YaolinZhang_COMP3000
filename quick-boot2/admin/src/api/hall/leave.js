import request from '@/utils/request'

export function leaveList(
  params = { pageNum: 1, pageSize: 999999, search: '' }
) { 
  return request({
    url: 'hall/leave/list',
    params
  })
}

export function delLeave(id) {
  return request({
    url: `hall/leave/del/${id}`,
    method: 'delete'
  })
}

export function saveLeave(data) {
  return request({
    url: 'hall/leave/save',
    method: 'post',
    data
  })
}
