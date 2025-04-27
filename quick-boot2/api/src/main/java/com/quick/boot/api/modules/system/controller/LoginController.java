package com.quick.boot.api.modules.system.controller;

import com.quick.boot.api.dto.Restful;
import com.quick.boot.api.modules.system.domain.User;
import com.quick.boot.api.modules.system.dto.LoginToken;
import com.quick.boot.api.modules.system.dto.UserInfo;
import com.quick.boot.api.modules.system.service.LogService;
import com.quick.boot.api.modules.system.service.UserService;
import com.quick.boot.api.modules.system.vo.UpdateProfileVO;
import com.quick.boot.jwtboot.entity.Result;
import com.quick.boot.jwtboot.helper.LoginHelper;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@RequestMapping("user")
public class LoginController {

    @Autowired
    private LoginHelper loginHelper;
    @Resource
    private LogService logService;
    @Resource
    private UserService userService;

    @RequiresPermissions({"ss-info"})
    @GetMapping("profile")
    public Restful<User> getUserProfile() {
        logService.addLog(LoginHelper.getUsername(), "获取个人信息");
        String username = LoginHelper.getUsername();
        User user = userService.getByUsername(username);
        user.setPassword(null);
        return Restful.ok(user);
    }

    @RequiresPermissions({"ss-info"})
    @PostMapping("profile")
    public Restful<Void> updateProfile(@RequestBody UpdateProfileVO profile) {
        logService.addLog(LoginHelper.getUsername(), "change personal info");
        String username = LoginHelper.getUsername();
        return userService.updateProfile(username, profile);
    }

    @PostMapping("login")
    public Restful<LoginToken> login(@RequestBody User loginUser) {
        Result result = loginHelper.login(loginUser.getUsername(), loginUser.getPassword());
        if (result.getSuccess()) {
            logService.addLog(loginUser.getUsername(), "login系统");
            String token = result.getData();
            return Restful.ok(new LoginToken(token));
        } else {
            return Restful.failed("usernameor password wrong，pls retry！");
        }
    }

    @RequiresPermissions({"ss-info"})
    @GetMapping("info")
    public Restful<UserInfo> userInfo() {
        String username = LoginHelper.getUsername();
        logService.addLog(username, "获取用户信息");
        return Restful.ok(userService.getUserInfo(username));
    }

    @RequiresPermissions({"ss-logout"})
    @RequestMapping("logout")
    public Restful<Void> logout() {
        logService.addLog(LoginHelper.getUsername(), "exitlogin");
        Result result = loginHelper.logout();
        if (result.getSuccess()) {
            return Restful.ok(null);
        } else {
            return Restful.failed(result.getMessage());
        }
    }


}
