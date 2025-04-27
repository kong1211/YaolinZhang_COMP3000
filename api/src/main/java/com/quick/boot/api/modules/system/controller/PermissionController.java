package com.quick.boot.api.modules.system.controller;

import com.baomidou.mybatisplus.extension.api.R;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.quick.boot.api.modules.system.domain.Permission;
import com.quick.boot.api.modules.system.service.LogService;
import com.quick.boot.api.modules.system.service.PermissionService;
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
@RequestMapping("permission")
public class PermissionController {

    @Resource
    private PermissionService permissionService;
    @Resource
    private LogService logService;

    @GetMapping("list")
    @RequiresPermissions({"ss-permission-list"})
    public R<Page<Permission>> permissionList(PageQuery query) {
        logService.addLog((String) SecurityUtils.getSubject().getPrincipal(), "查看权限列表");

        Page<Permission> page = permissionService
                .query()
                .like("name", query.getSearch())
                .or()
                .like("description", query.getSearch())
                .page(new Page<>(query.getPageNum(), query.getPageSize()));

        return R.ok(page);
    }


    @RequiresPermissions({"ss-permission-save"})
    @PostMapping("save")
    public R<Void> savePermission(@RequestBody Permission permission) {
        permissionService.saveOrUpdate(permission);
        logService.addLog((String) SecurityUtils.getSubject().getPrincipal(), "保存权限信息 ID=>" + permission.getId());
        return R.ok(null);
    }

    @DeleteMapping("del/{id}")
    @RequiresPermissions({"ss-permission-delete"})
    public R<Void> deletePermission(@PathVariable Integer id) {
        logService.addLog((String) SecurityUtils.getSubject().getPrincipal(), "删除权限信息 ID=>" + id);
        permissionService.removeById(id);
        return R.ok(null);
    }
}
