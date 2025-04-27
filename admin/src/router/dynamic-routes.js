import { buildRoutes, buildRoute } from "@/utils/routes";

const systemRoutes = buildRoute("/system", [
  buildRoutes("用户管理", "/system/user", () => import("@/views/system/user")),
  buildRoutes("权限管理", "/system/permission", () =>
    import("@/views/system/permission")
  ),
  buildRoutes("角色管理", "/system/role", () => import("@/views/system/role")),
  buildRoutes("菜单管理", "/system/menu", () => import("@/views/system/menu")),
  buildRoutes("日志管理", "/system/logs", () => import("@/views/system/logs")),
  buildRoutes("修改个人信息", "/system/profile", () =>
    import("@/views/system/profile")
  ),
  buildRoutes("信息管理", "/system/info", () => import("@/views/system/info")),
]);

const hallRoutes = buildRoute("/hall", [
  buildRoutes("菜品管理", "/hall/item", () => import("@/views/hall/item")),
  buildRoutes("员工管理", "/hall/emp", () => import("@/views/hall/emp")),
  buildRoutes("请假管理", "/hall/leave", () => import("@/views/hall/leave")),
  buildRoutes("下单", "/hall/order/form", () => import("@/views/hall/order/form")),
  buildRoutes("下单列表", "/hall/order/list", () => import("@/views/hall/order/index")),
]);

export default [systemRoutes, hallRoutes];
