package com.quick.boot.api.modules.system.controller;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.quick.boot.api.dto.Restful;
import com.quick.boot.api.modules.system.domain.User;
import com.quick.boot.api.modules.system.service.LogService;
import com.quick.boot.api.modules.system.service.UserService;
import com.quick.boot.api.vo.PageQuery;
import com.quick.boot.jwtboot.token.TokenDAO;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RequestMapping("user")
@RestController
public class UserController {

    @Resource
    private UserService userService;
    @Resource
    private TokenDAO tokenDAO;
    @Autowired
    private LogService logService;

    // 删除列表
    @GetMapping("list")
    @RequiresPermissions({"ss-user-list"})
    public Restful<Page<User>> getUserList(PageQuery query) {
        Page<User> page = userService
                .query()
                .like("username", query.getSearch())
                .page(new Page<>(query.getPageNum(), query.getPageSize()));

        logService.addLog((String) SecurityUtils.getSubject().getPrincipal(), "查看用户列表");
        return Restful.ok(page);
    }

    // 保存用户
    @PostMapping("save")
    @RequiresPermissions({"ss-user-save"})
    public Restful<Void> saveUser(@RequestBody User user) {
        userService.saveOrUpdate(user);
        logService.addLog((String) SecurityUtils.getSubject().getPrincipal(), "保存用户信息 ID=>" + user.getId());
        return Restful.ok(null);
    }

    // 删除用户
    @DeleteMapping("del/{id}")
    @RequiresPermissions({"ss-user-delete"})
    public Restful<Void> delUser(@PathVariable Integer id) {
        User user = userService.getById(id);
        if (user != null)
            tokenDAO.del(user.getUsername());

        userService.removeById(id);
        logService.addLog((String) SecurityUtils.getSubject().getPrincipal(), "删除用户信息 ID=>" + id);
        return Restful.ok(null);
    }


    // 强制用户下线
    @PostMapping("offline/{username}")
    @RequiresPermissions({"ss-user-offline"})
    public Restful<Void> offline(@PathVariable String username) {
        if (tokenDAO.get(username) == null) {
            return Restful.failed("用户不在线！");
        }
        logService.addLog((String) SecurityUtils.getSubject().getPrincipal(), "强制用户下线=>" + username);
        tokenDAO.del(username);
        return Restful.ok(null);
    }

}
