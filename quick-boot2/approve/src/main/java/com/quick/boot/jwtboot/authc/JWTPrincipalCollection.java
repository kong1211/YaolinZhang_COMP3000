package com.quick.boot.jwtboot.authc;

import lombok.Data;
import org.apache.shiro.subject.SimplePrincipalCollection;

@Data
public class JWTPrincipalCollection extends SimplePrincipalCollection {

    private AuthenticationUser jwtUser;

    public JWTPrincipalCollection(Object principal, String realmName) {
        super(principal, realmName);
    }

}
