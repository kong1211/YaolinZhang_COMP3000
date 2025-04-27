package com.quick.boot.api.modules.system.controller;

import com.quick.boot.api.dto.Restful;
import com.quick.boot.api.modules.system.domain.RoleMenu;
import com.quick.boot.api.modules.system.service.LogService;
import com.quick.boot.api.modules.system.service.RoleMenuService;
import com.quick.boot.jwtboot.helper.LoginHelper;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("role/menu")
@RestController
public class RoleMenuController {

    @Autowired
    private RoleMenuService roleMenuService;
    @Autowired
    private LogService logService;

    /**
     * 获取role的菜单列表
     *
     * @param roleId roleID
     * @return role菜单
     */
    @GetMapping("list/{roleId}")
    @RequiresPermissions({"ss-menu-allot"})
    public Restful<List<Integer>> getRoleMenus(@PathVariable Integer roleId) {
        logService.addLog(LoginHelper.getUsername(), "获取role菜单列表 ID=>" + roleId);
        List<Integer> data = roleMenuService
                .query()
                .eq("role_id", roleId)
                .list()
                .stream()
                .map(RoleMenu::getMenuId)
                .collect(Collectors.toList());
        return Restful.ok(data);
    }

    /**
     * set role的菜单列表
     *
     * @param roleId  roleID
     * @param menuIds 菜单ID列表
     * @return 是否分配successful
     */
    @PostMapping("allot/{roleId}")
    @RequiresPermissions({"ss-menu-allot"})
    public Restful<Void> allotRoleMenus(@PathVariable Integer roleId, @RequestBody List<Integer> menuIds) {
        logService.addLog(LoginHelper.getUsername(), "set role菜单列表 ID=>" + roleId);
        List<RoleMenu> menus = roleMenuService
                .query()
                .eq("role_id", roleId)
                .list();
        menus.removeIf(m -> {
            if (menuIds.contains(m.getId())) {
                menuIds.remove(m.getId());
                return true;
            }
            return false;
        });

        // delete不存在的菜单
        if (menus.size() > 0) {
            roleMenuService.removeByIds(menus.stream().map(RoleMenu::getId).collect(Collectors.toList()));
        }

        // 如果有需要添加的菜单，添加到role中
        if (menuIds.size() > 0) {
            List<RoleMenu> list = menuIds.stream().map(menuId -> {
                RoleMenu roleMenu = new RoleMenu();
                roleMenu.setRoleId(roleId);
                roleMenu.setMenuId(menuId);
                return roleMenu;
            }).collect(Collectors.toList());
            roleMenuService.saveBatch(list);
        }

        return Restful.ok(null);
    }

}
