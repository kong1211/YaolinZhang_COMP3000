package com.quick.boot.jwtboot.controller;

import com.quick.boot.jwtboot.entity.AuthenticationVO;
import com.quick.boot.jwtboot.entity.Result;
import com.quick.boot.jwtboot.helper.LoginHelper;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

    @Autowired
    private LoginHelper loginHelper;


    @RequestMapping("authentication/login")
    public AuthenticationVO login(String username, String password, String client, String secret) {
        Result result = loginHelper.login(username, password, client, secret);
        if (result.getSuccess()) {
            AuthenticationVO.Token token = new AuthenticationVO.Token();
            token.setToken(result.getData());
            return new AuthenticationVO(0, result.getMessage(), token);
        }
        return new AuthenticationVO(-1, result.getMessage(), null);
    }

    @RequestMapping("authentication/logout")
    @RequiresPermissions("USER")
    public AuthenticationVO logout(String client, String secret) {
        Result result = loginHelper.logout(client, secret);
        if (result.getSuccess()) {
            return new AuthenticationVO(0, result.getMessage(), null);
        }
        return new AuthenticationVO(-1, "注销失败!", null);
    }


}
