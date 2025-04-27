package com.quick.boot.jwtboot.helper.impl;

import com.quick.boot.jwtboot.entity.AuthenticationVO;
import com.quick.boot.jwtboot.entity.Result;
import com.quick.boot.jwtboot.helper.LoginHelper;
import com.quick.boot.jwtboot.utils.JWTUtil;
import com.quick.boot.jwtboot.authc.AuthenticationUser;
import com.quick.boot.jwtboot.service.AuthenticationService;
import com.quick.boot.jwtboot.token.TokenDAO;
import org.apache.shiro.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class LoginHelperImpl implements LoginHelper {
    @Autowired
    private AuthenticationService userService;
    @Autowired
    private JWTUtil jwtPlugin;
    @Autowired
    private TokenDAO tokenDAO;
    @Value("${jwt.client}")
    private String client;
    @Value("${jwt.secret}")
    private String secret;
    @Value("${jwt.provide_open}")
    public boolean provideOpen;

    private boolean checkClientSecret(String client, String secret) {
        if (this.provideOpen)
            return this.client.equals(client) && this.secret.equals(secret);
        return true;
    }


    @Override
    public Result login(String username, String password) {
        return login(username, password, client, secret);
    }

    @Override
    public Result login(String username, String password, String client, String secret) {
        if (!checkClientSecret(client, secret)) {
            return new Result(false, "您的授权令牌错误！", null);
        }

        AuthenticationUser user = userService.getUser(username, password);
        if (user != null) {
            String jwt = jwtPlugin.createToken(user);
            AuthenticationVO.Token token = new AuthenticationVO.Token();
            token.setToken(jwt);
            tokenDAO.put(username, jwt);
            return new Result(true, "loginsuccessful", jwt);
        } else {
            return new Result(false, "username or password wrong，pls retry！", null);
        }
    }

    @Override
    public Result logout(String client, String secret) {
        if (!checkClientSecret(client, secret)) {
            return new Result(false, "您的授权令牌错误！", null);
        }
        String username = (String) SecurityUtils.getSubject().getPrincipal();
        if (tokenDAO.isExist(username)) {
            tokenDAO.del(username);
            return new Result(true, "exitloginsuccessful！", null);
        } else {
            return new Result(false, "Token不存在！", null);
        }
    }

    @Override
    public Result logout() {
        return logout(client, secret);
    }


}
