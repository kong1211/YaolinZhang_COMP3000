import request from '@/utils/request'

export function itemList(
  params = { pageNum: 1, pageSize: 999999, search: '' }
) { 
  return request({
    url: 'hall/item/list',
    params
  })
}

export function delItem(id) {
  return request({
    url: `hall/item/del/${id}`,
    method: 'delete'
  })
}

export function saveItem(data) {
  return request({
    url: 'hall/item/save',
    method: 'post',
    data
  })
}
