/**
 * 创建主路由信息
 * @param {*} path 根路径
 * @param {*} routes 子菜单
 * @returns 主路由
 */
export function buildRoute(path, routes, layout = true) {
  const name = path.replace(/\//g, '').toUpperCase()
  const router = {
    name,
    path,
    children: routes
  }
  if (layout) {
    router.component = () => import('@/layout')
  }
  return router
}

/**
 * 创建子路由信息
 * @param {*} path 路径
 * @param {*} component 组件
 * @returns 子路由
 */
export function buildRoutes(title, path = '', component) {
  const name = path.replace(/\//g, '').toUpperCase()
  return {
    name,
    path,
    component,
    meta: {
      title
    }
  }
}

/**
 * 创建左侧路由
 * @param {*} menus Api获取的菜单列表
 * @returns 路由信息
 */
export function createRoutes(menus = []) {
  const routes = []
  menus.forEach((menu) => {
    const route = {
      path: menu.path,
      meta: { title: menu.name, icon: menu.icon },
      children: createRoutes(menu.children)
    }
    routes.push(route)
  })
  return routes
}
