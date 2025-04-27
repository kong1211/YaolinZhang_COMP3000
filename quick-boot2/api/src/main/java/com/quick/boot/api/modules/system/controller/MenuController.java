package com.quick.boot.api.modules.system.controller;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.quick.boot.api.dto.Restful;
import com.quick.boot.api.modules.system.domain.Menu;
import com.quick.boot.api.modules.system.service.LogService;
import com.quick.boot.api.modules.system.service.MenuService;
import com.quick.boot.api.vo.PageQuery;
import com.quick.boot.jwtboot.helper.LoginHelper;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("menu")
public class MenuController {

    @Resource
    private MenuService menuService;
    @Resource
    private LogService logService;

    @GetMapping("tree")
    @RequiresPermissions({"ss-menu-list"})
    public Restful<List<Menu>> treeMenus() {
        logService.addLog(LoginHelper.getUsername(), "View所有菜单树");
        return Restful.ok(menuService.treeMenus());
    }

    @GetMapping("list")
    @RequiresPermissions({"ss-menu-list"})
    public Restful<Page<Menu>> menuList(PageQuery query) {
        logService.addLog(LoginHelper.getUsername(), "search菜单列表");
        Page<Menu> queryMenus = menuService.queryMenus(query.getSearch(), query.getPageNum(), query.getPageSize());
        return Restful.ok(queryMenus);
    }

    @PostMapping("save")
    @RequiresPermissions({"ss-menu-save"})
    public Restful<Void> saveMenu(@RequestBody Menu menu) {
        menuService.saveOrUpdate(menu);
        logService.addLog(LoginHelper.getUsername(), "保存菜单信息=>" + menu.getId());
        return Restful.ok(null);
    }

    @DeleteMapping("del/{id}")
    @RequiresPermissions({"ss-menu-delete"})
    public Restful<Void> delMenu(@PathVariable Integer id) {
        menuService.removeById(id);
        logService.addLog(LoginHelper.getUsername(), "delete菜单信息=>" + id);
        return Restful.ok(null);
    }

}
