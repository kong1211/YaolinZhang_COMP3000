package com.quick.boot.jwtboot.authc;

import lombok.Data;
import org.apache.shiro.authc.UsernamePasswordToken;

@Data
public class JWTAuthenticationToken extends UsernamePasswordToken {

    private AuthenticationUser user;

    public JWTAuthenticationToken(AuthenticationUser user) {
        super(user.getUsername(), user.getPassword());
        this.user = user;
    }

}
