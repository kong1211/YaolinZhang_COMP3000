package com.quick.boot.api.modules.system.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.quick.boot.api.dto.Restful;
import com.quick.boot.api.modules.system.domain.UserRole;
import com.quick.boot.api.modules.system.service.LogService;
import com.quick.boot.api.modules.system.service.UserRoleService;
import com.quick.boot.jwtboot.helper.LoginHelper;
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

@RestController
@RequestMapping("user/role")
public class UserRoleController {

    @Autowired
    private UserRoleService userRoleService;
    @Autowired
    private LogService logService;

    // 获取用户role列表
    @GetMapping("list/{userId}")
    @RequiresPermissions({"ss-user-allot"})
    public Restful<List<Integer>> getRoleIdsByUserId(@PathVariable Integer userId) {
        logService.addLog(LoginHelper.getUsername(), "View用户role ID=>" + userId);
        List<Integer> roleIds = userRoleService
                .query()
                .eq("user_id", userId)
                .list()
                .stream()
                .map(UserRole::getRoleId)
                .collect(Collectors.toList());
        return Restful.ok(roleIds);
    }

    // 分配用户role
    @PostMapping("allot/{userId}")
    @RequiresPermissions({"ss-user-allot"})
    public Restful<Void> userAllotRoles(@PathVariable Integer userId, @RequestBody List<Integer> roleIds) {
        logService.addLog(LoginHelper.getUsername(), "分配用户role ID=>" + userId);
        QueryWrapper<UserRole> removeWrapper = userRoleService
                .query()
                .getWrapper()
                .eq("user_id", userId);
        userRoleService.remove(removeWrapper);

        List<UserRole> userRoleList = roleIds
                .stream()
                .map(roleId -> {
                    UserRole ur = new UserRole();
                    ur.setUserId(userId);
                    ur.setRoleId(roleId);
                    return ur;
                })
                .collect(Collectors.toList());

        userRoleService.saveBatch(userRoleList);
        return Restful.ok(null);
    }

}
