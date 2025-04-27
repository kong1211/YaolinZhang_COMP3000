package com.quick.boot.api.modules.system.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.quick.boot.api.dto.Restful;
import com.quick.boot.api.modules.system.domain.RolePermission;
import com.quick.boot.api.modules.system.service.LogService;
import com.quick.boot.api.modules.system.service.RolePermissionService;
import org.apache.shiro.SecurityUtils;
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

@RequestMapping("role/permission")
@RestController
public class RolePermissionController {

    @Autowired
    private RolePermissionService rolePermissionService;
    @Autowired
    private LogService logService;

    // 获取role分配的权限
    @GetMapping("list/{roleId}")
    @RequiresPermissions({"ss-role-allot"})
    public Restful<List<Integer>> getPermissionIdsByRoleId(@PathVariable Integer roleId) {
        logService.addLog((String) SecurityUtils.getSubject().getPrincipal(), "Viewrole权限 ID=>" + roleId);
        List<Integer> permissionIds = rolePermissionService
                .query()
                .eq("role_id", roleId)
                .list()
                .stream()
                .map(RolePermission::getPermissionId)
                .collect(Collectors.toList());
        return Restful.ok(permissionIds);
    }

    // 为roleAssign permissions
    @PostMapping("allot/{roleId}")
    @RequiresPermissions({"ss-role-allot"})
    public Restful<Void> roleAllotPermissions(@RequestBody List<Integer> permissionIds, @PathVariable Integer roleId) {
        logService.addLog((String) SecurityUtils.getSubject().getPrincipal(), "set role权限 ID=>" + roleId);
        QueryWrapper<RolePermission> removeWrapper = rolePermissionService
                .query()
                .getWrapper()
                .eq("role_id", roleId);
        rolePermissionService.remove(removeWrapper);

        List<RolePermission> rolePermissionList = permissionIds
                .stream()
                .map(permissionId -> {
                    RolePermission rp = new RolePermission();
                    rp.setRoleId(roleId);
                    rp.setPermissionId(permissionId);
                    return rp;
                })
                .collect(Collectors.toList());
        rolePermissionService.saveBatch(rolePermissionList);

        return Restful.ok(null);
    }

}
