package com.quick.boot.jwtboot.helper;

import com.quick.boot.jwtboot.entity.Result;
import org.apache.shiro.SecurityUtils;

public interface LoginHelper {

    Result login(String username, String password);

    Result login(String username, String password, String client, String secret);

    Result logout(String client, String secret);
    Result logout();

    static String getUsername() {
        if (SecurityUtils.getSubject() != null)
            return (String) SecurityUtils.getSubject().getPrincipal();
        return null;
    }

}
