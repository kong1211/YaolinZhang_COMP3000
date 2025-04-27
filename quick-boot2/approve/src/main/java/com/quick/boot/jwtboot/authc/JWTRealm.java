package com.quick.boot.jwtboot.authc;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;

public class JWTRealm extends AuthorizingRealm {

    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
        if (authenticationToken instanceof JWTAuthenticationToken) {
            // 获取JWT TOKEN的信息
            JWTAuthenticationToken token = (JWTAuthenticationToken) authenticationToken;
            // 获取USER
            AuthenticationUser user = token.getUser();
            // 实例化JwtAuthenticationInfo
            return new JWTAuthenticationInfo(user);
        }
        return null;
    }

    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        if (principalCollection instanceof JWTPrincipalCollection) {
            JWTPrincipalCollection jwtPrincipalCollection = (JWTPrincipalCollection) principalCollection;
            AuthenticationUser user = jwtPrincipalCollection.getJwtUser();
            SimpleAuthorizationInfo authorizationInfo = new SimpleAuthorizationInfo();
            authorizationInfo.addStringPermissions(user.getPermissions());
            authorizationInfo.addStringPermission("USER");
            authorizationInfo.addRoles(user.getRoles());
            return authorizationInfo;
        }
        return null;
    }
}
