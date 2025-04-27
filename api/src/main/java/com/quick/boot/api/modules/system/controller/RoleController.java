package com.quick.boot.api.modules.system.controller;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.quick.boot.api.dto.Restful;
import com.quick.boot.api.modules.system.domain.Role;
import com.quick.boot.api.modules.system.service.LogService;
import com.quick.boot.api.modules.system.service.RoleService;
import com.quick.boot.api.vo.PageQuery;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@RequestMapping("role")
public class RoleController {

    @Resource
    private RoleService roleService;
    @Resource
    private LogService logService;

    @GetMapping("list")
    @RequiresPermissions({"ss-role-list"})
    public Restful<Page<Role>> roleList(PageQuery query) {
        logService.addLog((String) SecurityUtils.getSubject().getPrincipal(), "查看角色列表");

        Page<Role> page = roleService
                .query()
                .like("name", query.getSearch())
                .or()
                .like("description", query.getSearch())
                .page(new Page<>(query.getPageNum(), query.getPageSize()));

        return Restful.ok(page);
    }


    @RequiresPermissions({"ss-role-save"})
    @PostMapping("save")
    public Restful<Void> saveRole(@RequestBody Role role) {

        roleService.saveOrUpdate(role);
        logService.addLog((String) SecurityUtils.getSubject().getPrincipal(), "保存角色信息 ID=>" + role.getId());
        return Restful.ok(null);
    }

    @DeleteMapping("del/{id}")
    @RequiresPermissions({"ss-role-delete"})
    public Restful<Void> deleteRole(@PathVariable Integer id) {
        roleService.removeById(id);
        logService.addLog((String) SecurityUtils.getSubject().getPrincipal(), "删除角色信息 ID=>" + id);
        return Restful.ok(null);
    }
}
