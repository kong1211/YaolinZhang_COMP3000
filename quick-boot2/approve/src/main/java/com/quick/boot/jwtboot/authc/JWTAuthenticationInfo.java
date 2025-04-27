package com.quick.boot.jwtboot.authc;

import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.subject.PrincipalCollection;

public class JWTAuthenticationInfo implements AuthenticationInfo {

    private AuthenticationUser user;

    public JWTAuthenticationInfo(AuthenticationUser user) {
        this.user = user;
    }

    @Override
    public PrincipalCollection getPrincipals() {
        JWTPrincipalCollection jwtPrincipalCollection = new JWTPrincipalCollection(user.getUsername(), "");
        jwtPrincipalCollection.setJwtUser(user);
        return jwtPrincipalCollection;
    }

    @Override
    public Object getCredentials() {
        return user.getPassword();
    }
}
