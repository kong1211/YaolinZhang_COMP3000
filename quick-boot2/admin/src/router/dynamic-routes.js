import { buildRoutes, buildRoute } from "@/utils/routes";

const systemRoutes = buildRoute("/system", [
  buildRoutes("User management", "/system/user", () => import("@/views/system/user")),
  buildRoutes("Permission management", "/system/permission", () =>
    import("@/views/system/permission")
  ),
  buildRoutes("Role management", "/system/role", () => import("@/views/system/role")),
  buildRoutes("Menu management", "/system/menu", () => import("@/views/system/menu")),
  buildRoutes("Dairy management", "/system/logs", () => import("@/views/system/logs")),
  buildRoutes("change personal info", "/system/profile", () =>
    import("@/views/system/profile")
  ),
  buildRoutes("Information management", "/system/info", () => import("@/views/system/info")),
]);

const hallRoutes = buildRoute("/hall", [
  buildRoutes("Dish management", "/hall/item", () => import("@/views/hall/item")),
  buildRoutes("Staff management", "/hall/emp", () => import("@/views/hall/emp")),
  buildRoutes("Vacation management", "/hall/leave", () => import("@/views/hall/leave")),
  buildRoutes("order", "/hall/order/form", () => import("@/views/hall/order/form")),
  buildRoutes("order list", "/hall/order/list", () => import("@/views/hall/order/index")),
]);

export default [systemRoutes, hallRoutes];
